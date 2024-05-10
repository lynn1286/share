// 路由动态渲染
export const revalidate = 0
// fetch 强制缓存
export const fetchCache = 'force-cache'

export async function GET() {
  const url = (await (await fetch('https://api.thecatapi.com/v1/images/search')).json())[0].url

  return Response.json({
    now: Date.now(),
    url
  })
}
