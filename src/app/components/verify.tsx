import { use } from 'react'
import sleep from '../utils/sleep'

const getUser = async () => {
  await sleep(3000)
  return false
}

const Verify = ({ login, dashboard }: { login: React.ReactNode; dashboard: React.ReactNode }) => {
  const isLogin = use(getUser())
  const verify = isLogin ? dashboard : login

  return verify
}

export default Verify
