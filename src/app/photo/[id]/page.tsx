import { photos } from '../../db/photo'
import Image from 'next/image'

export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
  const photo = photos.find(p => p.id === id) || photos[0]
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="font-bold my-3">图片详情</div>
      <Image className="block mx-auto" alt={photo.src} width={800} height={800} src={photo.src} />
    </div>
  )
}
