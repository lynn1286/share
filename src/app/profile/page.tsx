'use client'

import { use } from 'react'

async function getData() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return {
    message: 'Hello, Profile!'
  }
}

const Profile = () => {
  // const { message } = await getData()
  const { message } = use(getData())

  return <div>Profile Page - {message}</div>
}

export default Profile
