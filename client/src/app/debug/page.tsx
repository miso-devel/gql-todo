import { ClientPage } from '@/components/ClientPage'
import { ServerPage } from '@/components/ServerPage'
import { Suspense, use } from 'react'
export type TTodo = {
  id: number
  userId: number
  title: string
  completed: boolean
}

const responseTodos = (): Promise<TTodo[]> =>
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((r) => new Promise((resolve) => setTimeout(() => resolve(r), 5000)))

const Todos = () => {
  const data = use(responseTodos()).slice(0, 10)
  return (
    <div>
      <h1 className='text-center text-3xl m-10'>デバッグページ</h1>
      <div className='grid grid-cols-2 my-3 mx-20 gap-5'>
        <div className='p-5 shadow-2xl border-2'>
          <h2 className='text-2xl text-orange-500 mb-5'>サーバーサイド</h2>
          {data.map((todo: TTodo) => {
            return (
              <ServerPage
                key={todo.id}
                id={todo.id}
                userId={todo.userId}
                title={todo.title}
                completed={todo.completed}
              />
            )
          })}
        </div>
        <div className='p-5 shadow-2xl border-2'>
          <h2 className='text-2xl text-orange-500 mb-5'>クライアントサイド</h2>
          {data.map((todo: TTodo) => {
            return (
              <ClientPage
                key={todo.id}
                id={todo.id}
                userId={todo.userId}
                title={todo.title}
                completed={todo.completed}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
const Page = () => {
  return (
    <Suspense fallback={<p>ローディング中</p>}>
      <Todos />
    </Suspense>
  )
}
export default Page
