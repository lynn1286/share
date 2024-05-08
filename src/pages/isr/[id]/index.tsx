export default function Blog({ post }: { post: { title: string; body: string } }) {
  return (
    <>
      <header>{post.title}</header>
      <main>{post.body}</main>
    </>
  )
}

// fallback 的模式改为 'blocking'
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.slice(0, 10).map((post: { id: string }) => ({
    params: { id: String(post.id) }
  }))

  return { paths, fallback: 'blocking' }
}

// 使用这种随机的方式模拟数据改变
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

// 多返回了 revalidata 属性
export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomInt(100)}`)
  const post = await res.json()

  return {
    props: { post },
    revalidate: 10
  }
}
