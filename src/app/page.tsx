import { cookies } from 'next/headers'
import Image from 'next/image'

export default async function Home({ searchParams }: { searchParams: { sku: string } }) {
  const { data } = await (
    await fetch('https://api.uomg.com/api/rand.music?sort=热歌榜&format=json')
  ).json()

  // const cookieStore = cookies()
  // const theme = cookieStore.get('theme')

  return (
    <div>
      <div>歌名： {data.name}</div>
      <div>演唱： {data.artistsname}</div>
      <Image alt={data.name} src={data.picurl} width={300} height={300}></Image>

      <div className="mt-6">当前时间： {new Date().toLocaleTimeString()}</div>
      <div>{searchParams.sku}</div>
    </div>
  )
}
