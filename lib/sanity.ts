import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'bbo1x3xn',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc, _createdAt desc) {
      _id,
      title,
      titleEn,
      slug,
      mainImage,
      publishedAt,
      "category": categories[0]->title,
      "excerpt": array::join(string::split(pt::text(body), "")[0..200], "")
    }
  `)
}

export async function getPost(slug: string) {
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      titleEn,
      slug,
      mainImage,
      publishedAt,
      body,
      bodyEn,
      "category": categories[0]->title,
      "author": author->name
    }
  `, { slug })
}
