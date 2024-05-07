export default function Page({ params }: { params: { slug?: string[] } }) {
  console.log('🚀 ~  : Page -> params', params)
  return <div>My Blog: {JSON.stringify(params)}</div>
}
