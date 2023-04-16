import { TTodo } from '@/app/debug/page'

export const ServerPage = (todo: TTodo) => {
  return (
    <p className='my-3'>
      {todo.id}: {todo.title}
    </p>
  )
}
