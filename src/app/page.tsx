import Image from 'next/image'

export const revalidate = 10 // 设置时效

export default async function Home() {
  const { data } = await (
    await fetch('https://api.uomg.com/api/rand.music?sort=热歌榜&format=json')
  ).json()

  console.log('🚀 ~  : Home -> data', data)

  return (
    <div>
      <div>歌名： {data.name}</div>
      <div>演唱： {data.artistsname}</div>
      <Image alt={data.name} src={data.picurl} width={300} height={300}></Image>

      <div className="mt-6">当前时间： {new Date().toLocaleTimeString()}</div>
    </div>
  )
}
