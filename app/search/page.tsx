import { client } from '@/lib/sanity'
import { notFound } from 'next/navigation'

export const revalidate = 60

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams
  if (!q) return notFound()

  const posts = await client.fetch(
    `*[_type == "post" && (titleEn match $query || title match $query)] | order(publishedAt desc) {
      _id, title, titleEn, slug, mainImage, publishedAt,
      "category": categories[0]->title,
      "imageUrl": mainImage.asset->url
    }`,
    { query: `*${q}*` } as any
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
        .page-wrap { max-width: 1280px; margin: 32px auto; padding: 0 16px; }
        .back-link { color: #cc0000; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 20px; }
        .search-header { margin-bottom: 28px; padding-bottom: 16px; border-bottom: 3px solid #cc0000; }
        .search-header h1 { font-size: 22px; font-weight: 900; color: #111; }
        .search-header p { font-size: 13px; color: #888; margin-top: 4px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
        .card { background: #fff; border-radius: 10px; overflow: hidden; border: 1px solid #eee; display: block; transition: all 0.2s; }
        .card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .card img { width: 100%; height: 180px; object-fit: cover; display: block; }
        .card-body { padding: 14px; }
        .card-cat { color: #cc0000; font-size: 10px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
        .card-title { font-size: 15px; font-weight: 700; line-height: 1.4; margin: 6px 0; color: #111; }
        .card:hover .card-title { color: #cc0000; }
        .card-time { color: #999; font-size: 11px; }
        .empty { text-align: center; padding: 80px 20px; color: #888; }
        .empty h2 { font-size: 22px; margin-bottom: 10px; }
      `}</style>

      <div className="page-wrap">
        <a href="/" className="back-link">← Home</a>
        <div className="search-header">
          <h1>Search results for: "{q}"</h1>
          <p>{posts.length} article{posts.length !== 1 ? 's' : ''} found</p>
        </div>

        {posts.length === 0 ? (
          <div className="empty">
            <h2>No results found</h2>
            <p>Try different keywords</p>
          </div>
        ) : (
          <div className="grid">
            {posts.map((post: any) => (
              <a key={post._id} className="card" href={`/news/${post.slug?.current}`}>
                <img src={post.imageUrl || 'https://placehold.co/400x250/cc0000/fff?text=News'} alt={post.titleEn || post.title} />
                <div className="card-body">
                  <div className="card-cat">{post.category}</div>
                  <div className="card-title">{post.titleEn || post.title}</div>
                  <div className="card-time">{timeAgo(post.publishedAt)}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
