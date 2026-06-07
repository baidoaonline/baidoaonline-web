import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

const client = createClient({
  projectId: 'bbo1x3xn',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function GET() {
  const posts = await client.fetch(`
    *[_type == "post" && defined(slug.current) && slug.current != "null"] | order(publishedAt desc) [0...1000] {
      "slug": slug.current,
      "title": coalesce(titleEn, title),
      publishedAt
    }
  `)

  const urls = posts.map((post: any) => `
  <url>
    <loc>https://www.baidoaonline.com/news/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Baidoa Online</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.publishedAt}</news:publication_date>
      <news:title>${(post.title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</news:title>
    </news:news>
  </url>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' }
  })
}
