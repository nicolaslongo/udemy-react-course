// Using Dynamic routing in blog post pages
type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({params}: BlogPostPageProps) {
  const { slug } = await params

  return <main>
    <h1>Blog post</h1>
    <p>{slug}</p>
  </main>
}