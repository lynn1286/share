import { redirect } from 'next/navigation'

const Login = () => {
  /**
   * @description: 登陆
   * @return {*}
   */
  const handlerLogin = async (formData: FormData) => {
    'use server'

    // 303
    redirect('/auth')
  }

  return (
    <div className="w-[1200px] mx-auto mt-8">
      <form action={handlerLogin}>
        <input className="border block rounded mb-3" name="name" />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded-lg">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
