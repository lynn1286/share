'use client'

import Link from 'next/link'

const Dashboard = () => {
  return (
    <div className="flex">
      <div>
        <div className="w-96 flex flex-col sticky top-0 left-0">
          <Link
            href={`/dashboard#dashboard`}
            className="h-[100px] bg-pink-100 [line-height:100px] text-center"
          >
            Dashboard
          </Link>
          <Link
            href={`/dashboard#settings`}
            className="h-[100px] bg-green-100 [line-height:100px] text-center"
          >
            Settings
          </Link>
          <Link
            href={`/dashboard#about`}
            className="h-[100px] bg-blue-100 [line-height:100px] text-center"
          >
            about
          </Link>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <div id="dashboard" className="h-[1000px] bg-pink-100">
          Dashboard
        </div>
        <div id="settings" className="h-[1000px] bg-green-100">
          Settings
        </div>
        <div id="about" className="h-[1000px] bg-blue-100">
          about
        </div>
      </div>
    </div>
  )
}

export default Dashboard
