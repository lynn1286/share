import Link from 'next/link'
import { ReactNode, Suspense } from 'react'
import { NavigationEvents } from './utils/navigation-events'

export const dynamic = 'force-dynamic'

export default function CacheLayout({ children }: { children: ReactNode }) {
  return (
    <section className="p-5">
      <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
        {/* 
          由于客户端缓存的原因，切换并不会更新页面，需要每次切换都更新，有以下方式：
            1. 等 ，动态渲染30s ，静态渲染5分钟
            2. 不使用Link标签，使用a标签，但是会每次刷新页面
            3. 使用 Server Actions 
            4. router.refresh
        
        */}
        <Link href="/about">About</Link>
        <Link href="/settings">Settings</Link>
      </nav>
      {children}
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>
    </section>
  )
}
