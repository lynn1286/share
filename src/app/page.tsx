import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-[1200px] mx-auto py-[200px]">
      <div className="grid grid-cols-4 border rounded-lg p-10">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard#dashboard">Dashboard {`->`} dashboard</Link>
        <Link href="/dashboard#settings">Dashboard {`->`} settings</Link>
        <Link href="/dashboard#about">Dashboard {`->`} about</Link>
      </div>
      <div className="grid grid-cols-4 border rounded-lg p-10 my-3">
        <Link href="/dashboard#about" scroll={false}>
          Dashboard {`->`} 禁用滚动到about
        </Link>
      </div>
    </div>
  )
}
