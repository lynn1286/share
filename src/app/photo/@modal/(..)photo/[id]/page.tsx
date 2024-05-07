'use client'

import { photos } from '../../../../db/photo'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function PhotoModal({ params: { id } }: { params: { id: string } }) {
  const photo = photos.find(p => p.id === id) || photos[0]
  const router = useRouter()

  return (
    <div
      onClick={() => router.back()}
      className={`flex h-screen justify-center items-center fixed bottom-0 bg-[rgba(0,0,0,.5)] w-full`}
    >
      <Image width={208} height={208} alt={photo.src} src={photo.src} />
    </div>
  )
}
