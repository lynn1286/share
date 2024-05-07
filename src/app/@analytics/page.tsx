import sleep from '../utils/sleep'

const Analytics = async () => {
  await sleep(6000)

  // console.log('🚀 ~  : Analytics -> ', error)

  return (
    <div className="w-1/2 bg-pink-300 h-[calc(100vh-44px)] text-white flex items-center justify-center">
      Analytics Page
    </div>
  )
}

export default Analytics
