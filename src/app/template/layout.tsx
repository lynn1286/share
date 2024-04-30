'use client'

import { useState } from 'react'
import Links from './components/links'

export default function TemplateLayout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  return (
    <div className="w-[1200px] mx-auto pt-3">
      <Links></Links>
      <h1 className="bg-slate-800 my-3 p-3 text-white">Layout {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-slate-800 p-3 text-white rounded-lg hover:bg-slate-700 my-3"
      >
        Increment
      </button>
      {children}
    </div>
  )
}
