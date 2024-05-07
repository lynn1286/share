import Link from 'next/link'
import { photos } from '../db/photo'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap">
      {photos.map(({ id, src }) => (
        <Link key={id} href={`/photo/${id}`}>
          <Image src={src} className="m-1" width={200} height={200} alt={src}></Image>
        </Link>
      ))}
    </main>
  )
}
