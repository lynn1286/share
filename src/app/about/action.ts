'use server'

async function getData() {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return {
    message: 'Hello, Profile!',
    code: 1
  }
}

export const actionError = async () => {
  return await getData()
}
