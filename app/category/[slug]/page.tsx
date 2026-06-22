import { client } from '@/lib/sanity'
import { notFound } from 'next/navigation'

export const revalidate = 60

const categoryMap: Record<string, string> = {
  wararka: 'Wararka',
  somalia: 'Somalia News',
  adduunka: 'World News',
  siyaasadda: 'Siyaasadda',
  ciyaaraha: "Sports",
  muuqaallo: 'Videos',
  english: 'English',
  ganacsiga: 'Business',
  articles: 'Articles',
  opinion: 'Opinion',
  'af-maay': 'Af-Maay',
  africa: 'Africa',
  'middle-east': 'Middle East',
  europe: 'Europe',
  americas: 'Americas',
  'asia-pacific': 'Asia Pacific',
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const categoryTitle = categoryMap[slug.toLowerCase()]
  if (!categoryTitle) return notFound()

  const isEnglish = slug === 'english'
  const worldCategories = ['Africa', 'Middle East', 'Europe', 'Americas', 'Asia Pacific']
  const isWorld = slug === 'adduunka'
  const worldCats = ['Africa', 'Middle East', 'Europe', 'Americas', 'Asia Pacific']

  const posts = isWorld
    ? await client.fetch(
        `*[_type == "post" && references(*[_type == "category" && title in $worldCats]._id)] | order(publishedAt desc) {
          _id, title, titleEn, slug, mainImage, publishedAt, isBreaking,
          "category": categories[0]->title,
          "imageUrl": mainImage.asset->url
        }`,
        { worldCats }
      )
    : await client.fetch(
        `*[_type == "post" && ($cat == "Somalia" || references(*[_type == "category" && title == $cat]._id) || ($cat == "English" && defined(titleEn)))] | order(publishedAt desc) {
          _id, title, titleEn, slug, mainImage, publishedAt, isBreaking,
          "category": categories[0]->title,
          "imageUrl": mainImage.asset->url
        }`,
        { cat: categoryTitle }
      )

  function timeAgo(dateStr: string) {
    if (!dateStr) return ''
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 60000)
    if (diff < 60) return `${diff} min ago`
    const h = Math.floor(diff / 60)
    if (h < 24) return `${h} hours ago`
    return `${Math.floor(h / 24)} days ago`
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; color: #111; }
        a { text-decoration: none; color: inherit; }
        .navbar { background: #fff; border-bottom: 1px solid #e0e0e0; box-shadow: 0 2px 8px rgba(0,0,0,0.06); position: sticky; top: 0; z-index: 100; }
        .navbar-inner { max-width: 1280px; margin: 0 auto; padding: 0 16px; display: flex; align-items: center; height: 64px; gap: 16px; }
        .logo-icon { position: relative; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .logo-dot { width: 10px; height: 10px; border-radius: 50%; background: #cc0000; position: absolute; }
        .logo-ring1 { width: 22px; height: 22px; border-radius: 50%; border: 2px solid #cc0000; opacity: 0.7; position: absolute; }
        .logo-ring2 { width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid #cc0000; opacity: 0.3; position: absolute; }
        .logo-text-main { color: #111; font-size: 24px; font-weight: 900; letter-spacing: 3px; line-height: 1; }
        .logo-text-sub { color: #cc0000; font-size: 8px; font-weight: 700; letter-spacing: 8px; }
        .page-wrap { max-width: 1280px; margin: 32px auto; padding: 0 16px; }
        .back-link { color: #cc0000; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 20px; }
        .back-link:hover { text-decoration: underline; }
        .cat-header { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; padding-bottom: 16px; border-bottom: 3px solid #cc0000; }
        .cat-header h1 { font-size: 26px; font-weight: 900; color: #111; letter-spacing: 1px; }
        .cat-count { background: #cc0000; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
        .card { background: #fff; border-radius: 10px; overflow: hidden; border: 1px solid #eee; cursor: pointer; transition: all 0.2s; display: block; }
        .card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .card img { width: 100%; height: 180px; object-fit: cover; display: block; }
        .card-body { padding: 14px; }
        .breaking-badge { display: inline-block; background: #cc0000; color: #fff; font-size: 10px; font-weight: 900; padding: 2px 8px; border-radius: 3px; margin-bottom: 6px; letter-spacing: 1px; }
        .card-cat { color: #cc0000; font-size: 10px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
        .card-title { font-size: 15px; font-weight: 700; line-height: 1.4; margin: 6px 0; color: #111; }
        .card:hover .card-title { color: #cc0000; }
        .card-time { color: #999; font-size: 11px; }
        .empty { text-align: center; padding: 80px 20px; color: #888; }
        .empty h2 { font-size: 22px; margin-bottom: 10px; }
        .footer { background: #111; padding: 28px 16px; margin-top: 48px; text-align: center; }
        .footer p { color: #555; font-size: 12px; }
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

      <div className="page-wrap">
        <a href="/" className="back-link">← Home</a>
        <div className="cat-header">
          <h1>{categoryTitle.toUpperCase()}</h1>
          <span className="cat-count">{posts.length} articles</span>
        </div>

        {posts.length === 0 ? (
          <div className="empty">
            <h2>🚧 Content Coming Soon</h2>
            <p>Stay tuned for the latest news!</p>
          </div>
        ) : (
          <div className="grid">
            {posts.map((post: any) => (
              <a key={post._id} className="card" href={`/news/${post.slug?.current}${isEnglish ? '?lang=en' : ''}`}>
                <img src={post.imageUrl || 'https://placehold.co/400x250/cc0000/fff?text=News'} alt={post.title} />
                <div className="card-body">
                  {post.isBreaking && (
                    <div className="breaking-badge">{isEnglish ? 'BREAKING NEWS' : 'WAR DEGDEG AH'}</div>
                  )}
                  <div className="card-cat">{post.category}</div>
                  <div className="card-title">{post.titleEn || post.title}</div>
                  <div className="card-time">{timeAgo(post.publishedAt)}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <footer className="footer">
        <p>© 2026 Baidoa Online · info@baidoaonline.com</p>
      </footer>
    </>
  )
}
