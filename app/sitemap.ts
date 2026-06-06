import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'bbo1x3xn',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export default async function sitemap() {
  const posts = await client.fetch(`
    *[_type == "post" && defined(slug.current) && slug.current != "null"] {
      "slug": slug.current,
      publishedAt
    }
  `)

  const postUrls = posts.map((post: any) => ({
    url: `https://www.baidoaonline.com/news/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://www.baidoaonline.com',
      lastModified: new Date(),
      changeFrequency: 'hourly' as const,
      priority: 1,
    },
    {
      url: 'https://www.baidoaonline.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: 'https://www.baidoaonline.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...postUrls,
  ]
}
