import { getPosts } from '@/lib/sanity'
import HomeClient from './HomeClient'

export const revalidate = 60

export default async function Home() {
  const posts = await getPosts()
  return <HomeClient posts={posts} />
}
