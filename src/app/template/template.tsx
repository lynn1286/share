'use client'

import { useState } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className="bg-green-600 my-3 p-3 text-white">Template {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-600 p-3 text-white rounded-lg hover:bg-green-700 my-3"
      >
        Increment
      </button>
      {children}
    </>
  )
}
