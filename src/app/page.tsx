import { cookies } from 'next/headers'
import Image from 'next/image'

// export const revalidate = 3600

async function getData() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search', {
    next: { revalidate: 10 }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getMusicData() {
  const res = await fetch('https://api.uomg.com/api/rand.music?sort=热歌榜&format=json', {
    next: { revalidate: 3600 }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Page() {
  cookies().get('next.js')

  const data = await getData()
  const { data: musics } = await getMusicData()

  return (
    <div>
      <div>
        <div>cat</div>
        <Image src={data[0].url} width={300} height={300} alt="" />
      </div>
      <div className="mt-6">
        <div>music</div>
        <div>music name： {musics.name}</div>
        <Image src={musics.picurl} width={300} height={300} alt="" />
      </div>

      <div className="mt-6">
        <div>current time： {new Date().toLocaleTimeString()}</div>
      </div>
    </div>
  )
}
