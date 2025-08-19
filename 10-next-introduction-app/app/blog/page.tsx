import Link from "next/link";

export default function BlogPage() {
  return <main>
    <h1>Blog</h1>
    <p><Link href="/blog/first-post">First post</Link></p>
    <p><Link href="/blog/second-post">Second post</Link></p>
  </main>
}