export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="h-20 border border-b text-center">我是Dashboard Layout</div>
      {children}
    </section>
  )
}
