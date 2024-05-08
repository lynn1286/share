import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(
    'https://api.uomg.com/api/rand.music?sort=%E7%83%AD%E6%AD%8C%E6%A6%9C&format=json',
    { next: { revalidate: 10 } }
  )
  const data = await res.json()

  return NextResponse.json(data)
}
