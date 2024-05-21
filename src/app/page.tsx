'use client'

import Image from 'next/image'
import baskets from '/public/baskets-6765014_1280.jpg'

const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  console.log('🚀 ~  : imageLoader -> width', width)
  return `${src}?x-oss-process=image/resize,m_lfit,w_${width}`
}

const imageqiniuLoader = ({
  src,
  width,
  quality
}: {
  src: string
  width: number
  quality?: number
}) => {
  return `${src}?imageView2/2/w/${width}`
}

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-56">
      <Image
        width={400}
        height={400}
        loader={imageLoader}
        sizes="(min-width: 600px) 2000px, (min-width: 500px) 1000px, 20px"
        alt="responsive image"
        src="https://oss-us-east.mademine.com/mademine/back-end/XHBPJJ0P271X02.jpg"
      ></Image>

      <Image
        width={400}
        height={400}
        loader={imageqiniuLoader}
        sizes="(min-width: 600px) 2000px, (min-width: 500px) 1000px, 20px"
        alt="responsive image"
        src="https://mademine-user-dev.maiyuan.online/0OtH9aAA44B5EiBCYseTL.jpg"
      ></Image>

      <Image
        width={400}
        height={400}
        sizes="(min-width: 600px) 2000px, (min-width: 500px) 1000px, 20px"
        alt="responsive image"
        src={baskets}
      ></Image>
    </div>
  )
}
