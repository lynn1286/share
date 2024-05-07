export default function PhotoLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <div>
      {children}
      {modal}
    </div>
  )
}
