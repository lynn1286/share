import Link from 'next/link'

export default async function Page() {
  return (
    <>
      <div className="h-60 flex-1 rounded-xl bg-teal-400 text-white flex items-center justify-center m-6">
        Hello Features!
      </div>

      <Link href={'/admin'} className="hover:text-slate-600 m-6">
        go to admin
      </Link>
    </>
  )
}
