export default function Blog({ post }: { post: { title: string; body: string } }) {
  return (
    <>
      <header>{post.title}</header>
      <main>{post.body}</main>
    </>
  )
}

// getStaticPaths 提供页面路径
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map((post: { id: string }) => ({
    params: { id: String(post.id) }
  }))

  // { fallback: false } 意味着当访问其他路由的时候返回 404
  return { paths, fallback: false }
}

// getStaticProps 根据页面路径参数提供页面内容
export async function getStaticProps({ params }: { params: { id: string } }) {
  // 如果路由地址为 /posts/1, params.id 为 1
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}
