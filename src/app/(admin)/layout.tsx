import { ReactNode } from 'react'
import '../globals.css'
import Link from 'next/link'

const navigation = [
  { title: 'Features', path: '/admin/features' },
  { title: 'Integrations', path: '#' },
  { title: 'Customers', path: '#' },
  { title: 'Pricing', path: '#' }
]

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <nav className="bg-white pb-5 text-sm rounded-xl border mt-2 shadow-none border-none mx-2 my-2">
          <div className="gap-x-14 items-center max-w-screen-xl mx-auto flex px-8">
            <div className="flex-1 items-center mt-8 flex">
              <ul className="justify-center items-center flex space-x-6 space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li key={idx} className="text-gray-700 hover:text-gray-900">
                      <Link href={item.path} className="block">
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="flex-1 gap-x-6 items-center justify-end flex space-y-0 mt-0">
                <a href="#" className="block text-gray-700 hover:text-gray-900">
                  {' '}
                  Log in{' '}
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full"
                >
                  {' '}
                  Sign in{' '}
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
