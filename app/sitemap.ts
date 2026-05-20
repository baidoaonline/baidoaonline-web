import { client } from '@/sanity/lib/client'

export default async function sitemap() {
  const posts = await client.fetch(`
    *[_type == "post"] {
      "slug": slug.current,
      publishedAt
    }
  `)

  const postUrls = posts.map((post: any) => ({
    url: `https://www.baidoaonline.com/news/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: 'daily',
    priority: 0.8,
  }))

  return [
    {
      url: 'https://www.baidoaonline.com',
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    {
      url: 'https://www.baidoaonline.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.baidoaonline.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...postUrls,
  ]
}
