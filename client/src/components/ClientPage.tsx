'use client'
import { TTodo } from '@/app/debug/page'
import { useState } from 'react'

export const ClientPage = (todo: TTodo) => {
  const [id, setId] = useState<number>(todo.id)
  return (
    <div className='flex'>
      <p className='my-3'>
        {id}: {todo.title}
      </p>
      <button className='ms-5 ' onClick={() => setId(id + 1)}>
        <span className='p-2 bg-slate-300 rounded-md'>button</span>
      </button>
    </div>
  )
}
