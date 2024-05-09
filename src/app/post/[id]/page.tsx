export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  const paths = posts.map((post: { id: string }) => ({
    id: String(post.id)
  }))
  return paths
}

const page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return (
    <>
      <header>{post.title}</header>
      <main>{post.body}</main>
    </>
  )
}

export default page
