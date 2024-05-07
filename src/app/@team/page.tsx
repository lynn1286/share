import sleep from '../utils/sleep'

const Team = async () => {
  await sleep(3000)

  return (
    <div className="w-1/2 bg-purple-400 h-[calc(100vh-44px)] text-white flex items-center justify-center">
      Team Page
    </div>
  )
}

export default Team
