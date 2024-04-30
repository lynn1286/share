'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

const Links = () => {
  const segment = useSelectedLayoutSegment()
  console.log('🚀 ~  : Links -> segment', segment)

  return (
    <div className="flex gap-3">
      <Link
        href="/template/about"
        className={`border rounded px-6 py-2 hover:bg-slate-200 transition-all duration-500 ${
          segment === 'about' ? 'bg-slate-300' : ''
        }`}
      >
        About
      </Link>
      <Link
        href="/template/settings"
        className={`border rounded px-6 py-2 hover:bg-slate-200 transition-all duration-500 ${
          segment === 'settings' ? 'bg-slate-300' : ''
        }`}
      >
        Settings
      </Link>
    </div>
  )
}

export default Links
