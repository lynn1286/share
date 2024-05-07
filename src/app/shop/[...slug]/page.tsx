export default function Page({ params }: { params: { slug: string[] } }) {
  console.log('🚀 ~  : Page -> params', params)
  return <div>My Shop: {JSON.stringify(params)}</div>
}
