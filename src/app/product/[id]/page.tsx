export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  const paths = posts.slice(0, 10).map((post: { id: string }) => ({
    id: String(post.id)
  }))
  return paths
}

// 使用这种随机的方式模拟数据改变
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

const page = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomInt(100)}`)
  const post = await res.json()

  return (
    <>
      <header>{post.title}</header>
      <main>{post.body}</main>
    </>
  )
}

export default page
