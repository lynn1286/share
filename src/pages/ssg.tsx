const Ssg = () => {
  return <div>Ssg</div>
}

export default Ssg

// import { useEffect, useState } from 'react'

// const Ssg = () => {
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`)
//       }
//       const result = await response.json()
//       console.log('🚀 ~  : fetchData -> result', result)
//       setData(result)
//     }

//     fetchData().catch(e => {
//       console.error('An error occurred while fetching the data: ', e)
//     })
//   }, [])

//   return <div>Ssg - {JSON.stringify(data)}</div>
// }

// export default Ssg
