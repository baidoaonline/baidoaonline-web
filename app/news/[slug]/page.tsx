import { getPost, urlFor } from '@/lib/sanity'
import { generateArticleSchema } from './structured-data'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

export const revalidate = 60

function calculateReadTime(body: any[]): number {
  if (!body) return 1
  const text = body.map((block: any) =>
    block._type === 'block' ? block.children?.map((c: any) => c.text).join('') : ''
  ).join(' ')
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export default async function ArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ lang?: string }>
}) {
  const { slug } = await params
  const { lang } = await searchParams
  const isEnglish = lang !== 'so'
  const post = await getPost(slug)
  if (!post) return notFound()

  function getImage() {
    if (post?.mainImage) return urlFor(post.mainImage).width(900).url()
    return 'https://placehold.co/900x500/cc0000/ffffff?text=Baidoa+Online'
  }

  const title = isEnglish && post.titleEn ? post.titleEn : post.title
  const body = isEnglish && post.bodyEn ? post.bodyEn : post.body
  const readTime = calculateReadTime(body)
  const shareUrl = `https://www.baidoaonline.com/news/${slug}`

  function getYouTubeEmbedUrl(url: string) {
    if (!url) return ''
    if (url.includes('watch?v=')) return url.replace('watch?v=', 'embed/')
    if (url.includes('youtu.be/')) return url.replace('youtu.be/', 'www.youtube.com/embed/')
    return url
  }

  const schema = generateArticleSchema(post, `https://www.baidoaonline.com/news/${slug}`)
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #f7f7f7; color: #111; }
        a { text-decoration: none; color: inherit; }
        .navbar { background: #fff; border-bottom: 1px solid #e0e0e0; box-shadow: 0 1px 4px rgba(0,0,0,0.06); position: sticky; top: 0; z-index: 100; }
        .navbar-inner { max-width: 1200px; margin: 0 auto; padding: 0 16px; display: flex; align-items: center; height: 56px; gap: 16px; }
        .logo-icon { position: relative; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .logo-dot { width: 9px; height: 9px; border-radius: 50%; background: #cc0000; position: absolute; }
        .logo-ring1 { width: 20px; height: 20px; border-radius: 50%; border: 2px solid #cc0000; opacity: 0.7; position: absolute; }
        .logo-ring2 { width: 33px; height: 33px; border-radius: 50%; border: 1.5px solid #cc0000; opacity: 0.3; position: absolute; }
        .logo-text-main { color: #111; font-size: 22px; font-weight: 900; letter-spacing: 2px; line-height: 1; }
        .logo-text-sub { color: #cc0000; font-size: 9px; font-weight: 700; letter-spacing: 7px; line-height: 1.5; }
        .lang-switch { margin-left: auto; display: flex; border: 1px solid #ccc; border-radius: 20px; overflow: hidden; }
        .lang-btn { padding: 4px 12px; font-size: 11px; font-weight: 700; cursor: pointer; border: none; background: transparent; color: #555; }
        .lang-btn.active { background: #cc0000; color: #fff; }
        .article-wrap { max-width: 820px; margin: 32px auto; padding: 0 16px; }
        .back-link { display: inline-flex; align-items: center; gap: 6px; color: #cc0000; font-size: 13px; font-weight: 700; margin-bottom: 20px; }
        .back-link:hover { text-decoration: underline; }
        .article-cat { color: #cc0000; font-size: 11px; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; }
        .article-title { font-size: 32px; font-weight: 900; line-height: 1.25; margin: 10px 0 16px; color: #111; }
        .article-meta { font-size: 13px; color: #666; margin-bottom: 16px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center; padding-bottom: 16px; border-bottom: 1px solid #eee; }
        .share-row { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
        .share-label { font-size: 12px; font-weight: 700; color: #555; margin-right: 4px; }
        .share-btn { display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; border: none; text-decoration: none; }
        .article-img { width: 100%; height: 420px; object-fit: cover; border-radius: 8px; display: block; margin-bottom: 28px; }
        .article-body { font-size: 17px; line-height: 1.85; color: #222; }
        .article-body p { margin-bottom: 20px; }
        .article-body h2 { font-size: 22px; font-weight: 900; margin: 28px 0 12px; }
        .article-body h3 { font-size: 18px; font-weight: 700; margin: 22px 0 10px; }
        .article-body ul, .article-body ol { margin: 0 0 20px 24px; }
        .article-body li { margin-bottom: 8px; }
        .article-body blockquote { border-left: 4px solid #cc0000; padding: 12px 20px; margin: 24px 0; background: #fafafa; font-style: italic; color: #444; }
        .section-hdr { background: #111; border-radius: 8px; padding: 12px 16px; margin: 32px 0 16px; display: flex; align-items: center; gap: 8px; }
        .section-hdr span { color: #fff; font-size: 14px; font-weight: 700; letter-spacing: 1px; }
        .video-wrap { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; margin-bottom: 28px; }
        .video-wrap iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 12px; margin-bottom: 28px; }
        .gallery-item { border-radius: 8px; overflow: hidden; border: 1px solid #eee; }
        .gallery-item img { width: 100%; height: 200px; object-fit: cover; display: block; }
        .gallery-caption { padding: 8px 12px; font-size: 12px; color: #666; background: #f9f9f9; }
        .attachment-item { display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: #fff; border: 1px solid #eee; border-radius: 8px; margin-bottom: 8px; text-decoration: none; color: #111; transition: border-color 0.15s; }
        .attachment-item:hover { border-color: #cc0000; }
        .attachment-icon { font-size: 24px; flex-shrink: 0; }
        .attachment-title { font-size: 14px; font-weight: 700; color: #111; }
        .attachment-sub { font-size: 12px; color: #cc0000; margin-top: 2px; }
        .footer { background: #1a1a1a; padding: 28px 16px; margin-top: 48px; text-align: center; }
        .footer p { color: #555; font-size: 12px; }
        @media (max-width: 600px) {
          .article-title { font-size: 22px; }
          .article-img { height: 220px; }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="19" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.2"/><circle cx="21" cy="21" r="14" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.4"/><circle cx="21" cy="21" r="9" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.65"/><circle cx="21" cy="21" r="5" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.9"/><circle cx="21" cy="21" r="2.5" fill="#cc0000"/></svg>
            <div>
              <div className="logo-text-main">BAIDOA</div>
              <div className="logo-text-sub">ONLINE</div>
            </div>
          </a>
          <div className="lang-switch">
            <a href={`/news/${slug}?lang=so`}>
              <button className={`lang-btn ${!isEnglish ? 'active' : ''}`}>Somali</button>
            </a>
            <a href={`/news/${slug}`}>
              <button className={`lang-btn ${isEnglish ? 'active' : ''}`}>English</button>
            </a>
          </div>
        </div>
      </nav>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="article-wrap">
        <a href={isEnglish ? '/category/english' : '/'} className="back-link">← {isEnglish ? 'Back' : 'Bogga Hore'}</a>
        {post.category && <div className="article-cat">{post.category}</div>}
        <h1 className="article-title">{title}</h1>

        <div className="article-meta">
          {post.publishedAt && (
            <span>📅 {new Date(post.publishedAt).toLocaleDateString(isEnglish ? 'en-US' : 'so-SO', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}</span>
          )}
          <span>|</span>
          {post.author && <span>✍️ {post.author}</span>}
          <span>|</span>
          <span>🕐 {readTime} min</span>
        </div>

        <div className="share-row">
          <span className="share-label">SHARE:</span>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="share-btn" style={{ background: '#1877f2' }}>f</a>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="share-btn" style={{ background: '#000' }}>𝕏</a>
          <a href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`} target="_blank" rel="noreferrer" className="share-btn" style={{ background: '#25d366' }}>W</a>
          <a href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noreferrer" className="share-btn" style={{ background: '#0088cc' }}>T</a>
        </div>

        <img src={getImage()} alt={title} className="article-img" />

        {body && (
          <article className="article-body">
            <PortableText value={body} />
          </article>
        )}

        {/* VIDEO EMBED */}
        {post.videoUrl && (
          <>
            <div className="section-hdr">
              <span>▶ VIDEO</span>
            </div>
            <div className="video-wrap">
              <iframe
                src={getYouTubeEmbedUrl(post.videoUrl)}
                allowFullScreen
              />
            </div>
          </>
        )}

        {/* PHOTO GALLERY */}
        {post.gallery && post.gallery.length > 0 && (
          <div style={{marginTop:'24px'}}>
            {post.gallery.map((img: any, i: number) => (
              <div key={i} style={{marginBottom:'16px'}}>
                <img src={urlFor(img).width(900).url()} alt={img.alt || ''} style={{width:'100%',borderRadius:'8px',display:'block'}} />
                {img.alt && <div style={{fontSize:'13px',color:'#666',marginTop:'6px',fontStyle:'italic'}}>{img.alt}</div>}
              </div>
            ))}
          </div>
        )}

        {/* ATTACHMENTS */}
        {post.attachments && post.attachments.length > 0 && (
          <>
            <div className="section-hdr">
              <span>📎 OFFICIAL DOCUMENTS</span>
            </div>
            {post.attachments.map((att: any, i: number) => (
              <div key={i} style={{marginBottom:'24px'}}>
                <div className="attachment-item">
                  <div className="attachment-icon">📄</div>
                  <div>
                    <div className="attachment-title">{att.title || 'Official Document'}</div>
                    <a href={att.asset?.url} target="_blank" rel="noreferrer" style={{fontSize:'12px',color:'#cc0000',textDecoration:'none'}}>Open in new tab ↗</a>
                  </div>
                </div>
                {att.asset?.url && (
                  <iframe
                    src={att.asset.url}
                    width="100%"
                    height="600px"
                    style={{border:'1px solid #eee',borderRadius:'8px',marginTop:'8px',display:'block'}}
                  />
                )}
              </div>
            ))}
          </>
        )}

      </div>

      <footer className="footer">
        <p>© 2026 Baidoa Online · info@baidoaonline.com</p>
      </footer>
    </>
  )
}
