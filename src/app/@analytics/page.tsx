import { cookies } from 'next/headers'
import sleep from '../utils/sleep'

const Analytics = async () => {
  cookies() // Nextjs 的自动静态优化后导致内容在构建阶段就确认下来，所以loading就不需要了，加这个是为了变成动态渲染
  await sleep(1000)

  // console.log('🚀 ~  : Analytics -> ', error)

  return (
    <div className="w-screen bg-pink-300 h-[calc(100vh-44px-56px)] text-white flex items-center justify-center">
      Analytics Page
    </div>
  )
}

export default Analytics
