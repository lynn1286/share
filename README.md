在 Next.js 中，有四种在路由之间导航的方法：

1. 使用 `<Link>` 组件
2. 使用 `useRouter` 钩子（客户端组件）
3. 使用 `redirect`函数（服务器组件）
4. 使用 `History API`


## useRouter

```js
'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
```
!!! info 建议在没有特殊处理需求的场景下，都使用 `<Link>` 。

## redirect
对于服务器组件，请使用 `redirect` 。
```js
  import { redirect } from 'next/navigation'

  const User = () => {
    const user = null
    if (!user) redirect('/login')
  }

  export default User

```

1. `redirect` 默认返回` 307（临时重定向）`状态代码。在服务器操作中使用时，它会返回 `303`，通常用于将 `POST` 请求重定向到成功页面。
2. `redirect` 在内部会引发错误，因此应在 `try/catch` 块之外调用。
3. `redirect` 可以在客户端组件的呈现过程中调用，但**不能在事件处理程序中调用**。您可以使用 `useRouter` 钩子来代替。
4. `redirect` 也接受绝对 `URL`，可用于重定向到外部链接。
5. 如果您想在**渲染过程之前重定向**，请使用 `next.config.js` 或中间件。
