'use client'
import { useEffect, useState } from 'react'
import { getPost, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

function calculateReadTime(body: any[]): number {
  if (!body) return 1
  const text = body.map((block: any) =>
    block._type === 'block' ? block.children?.map((c: any) => c.text).join('') : ''
  ).join(' ')
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    getPost(params.slug).then(setPost)
  }, [params.slug])

  if (!post) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ color: '#cc0000', fontSize: '18px' }}>Waa la rarayo...</div>
    </div>
  )

  function getImage() {
    if (post?.mainImage) return urlFor(post.mainImage).width(900).url()
    return 'https://placehold.co/900x500/cc0000/ffffff?text=Baidoa+Online'
  }

  const readTime = calculateReadTime(post.body)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = post.title

  function copyLink() {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #f7f7f7; color: #111; }
        a { text-decoration: none; color: inherit; }
        .navbar { background: #fff; border-bottom: 1px solid #e0e0e0; box-shadow: 0 1px 4px rgba(0,0,0,0.06); position: sticky; top: 0; z-index: 100; }
        .navbar-inner { max-width: 1200px; margin: 0 auto; padding: 0 16px; display: flex; align-items: center; gap: 16px; height: 56px; }
        .logo-icon { position: relative; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .logo-dot { width: 9px; height: 9px; border-radius: 50%; background: #cc0000; position: absolute; }
        .logo-ring1 { width: 20px; height: 20px; border-radius: 50%; border: 2px solid #cc0000; opacity: 0.7; position: absolute; }
        .logo-ring2 { width: 33px; height: 33px; border-radius: 50%; border: 1.5px solid #cc0000; opacity: 0.3; position: absolute; }
        .logo-text-main { color: #111; font-size: 22px; font-weight: 900; letter-spacing: 2px; line-height: 1; }
        .logo-text-sub { color: #cc0000; font-size: 9px; font-weight: 700; letter-spacing: 7px; line-height: 1.5; }
        .article-wrap { max-width: 820px; margin: 32px auto; padding: 0 16px; }
        .back-link { display: inline-flex; align-items: center; gap: 6px; color: #cc0000; font-size: 13px; font-weight: 700; margin-bottom: 20px; }
        .back-link:hover { text-decoration: underline; }
        .article-cat { color: #cc0000; font-size: 11px; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; }
        .article-title { font-size: 32px; font-weight: 900; line-height: 1.25; margin: 10px 0 16px; color: #111; }
        .article-meta { font-size: 13px; color: #666; margin-bottom: 16px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center; padding-bottom: 16px; border-bottom: 1px solid #eee; }
        .article-meta span { display: flex; align-items: center; gap: 5px; }
        .meta-divider { color: #ddd; }
        .share-row { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
        .share-label { font-size: 12px; font-weight: 700; color: #555; margin-right: 4px; }
        .share-btn { display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; border: none; transition: opacity 0.15s; }
        .share-btn:hover { opacity: 0.85; }
        .share-copy { background: #f0f0f0; color: #333; font-size: 11px; padding: 6px 14px; border-radius: 20px; cursor: pointer; border: 1px solid #ddd; font-weight: 600; white-space: nowrap; }
        .share-copy:hover { background: #cc0000; color: #fff; border-color: #cc0000; }
        .article-img { width: 100%; height: 420px; object-fit: cover; border-radius: 8px; display: block; margin-bottom: 28px; }
        .article-body { font-size: 17px; line-height: 1.85; color: #222; }
        .article-body p { margin-bottom: 20px; }
        .article-body h2 { font-size: 22px; font-weight: 900; margin: 28px 0 12px; }
        .article-body h3 { font-size: 18px; font-weight: 700; margin: 22px 0 10px; }
        .article-body ul, .article-body ol { margin: 0 0 20px 24px; }
        .article-body li { margin-bottom: 8px; }
        .article-body blockquote { border-left: 4px solid #cc0000; padding: 12px 20px; margin: 24px 0; background: #fafafa; font-style: italic; color: #444; }
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
            <div className="logo-icon">
              <div className="logo-dot"></div>
              <div className="logo-ring1"></div>
              <div className="logo-ring2"></div>
            </div>
            <div>
              <div className="logo-text-main">BAIDOA</div>
              <div className="logo-text-sub">ONLINE</div>
            </div>
          </a>
        </div>
      </nav>

      <div className="article-wrap">
        <a href="/" className="back-link">← Ku noqo Bogga Hore</a>

        {post.category && <div className="article-cat">{post.category}</div>}
        <h1 className="article-title">{post.title}</h1>

        <div className="article-meta">
          {post.publishedAt && (
            <span>📅 {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}</span>
          )}
          <span className="meta-divider">|</span>
          {post.author && <span>✍️ {post.author}</span>}
          <span className="meta-divider">|</span>
          <span>🕐 {readTime} min read</span>
        </div>

        <div className="share-row">
          <span className="share-label">SHARE:</span>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer">
            <button className="share-btn" style={{ background: '#1877f2' }}>f</button>
          </a>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer">
            <button className="share-btn" style={{ background: '#000' }}>𝕏</button>
          </a>
          <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} target="_blank" rel="noreferrer">
            <button className="share-btn" style={{ background: '#25d366' }}>W</button>
          </a>
          <a href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noreferrer">
            <button className="share-btn" style={{ background: '#0088cc' }}>T</button>
          </a>
          <button className="share-copy" onClick={copyLink}>
            {copied ? '✅ Copied!' : '🔗 Copy Link'}
          </button>
        </div>

        <img src={getImage()} alt={post.title} className="article-img"
          onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/900x500/cc0000/ffffff?text=Baidoa+Online' }} />

        {post.body && (
          <article className="article-body">
            <PortableText value={post.body} />
          </article>
        )}
      </div>

      <footer className="footer">
        <p>© 2026 Baidoa Online · info@baidoaonline.com</p>
      </footer>
    </>
  )
}
