import { redirect } from 'next/navigation'

const User = () => {
  const user = null
  if (!user) redirect('/login')
}

export default User
