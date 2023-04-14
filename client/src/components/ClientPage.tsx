'use client'
import { useState } from 'react'
import { ServerPage } from './ServerPage'
export const ClientPage = () => {
  const [name, setName] = useState('サンプル')
  return (
    <div>
      <p>クライアントサイド</p>
      <p>名前：{name}</p>
      <button onClick={() => setName('miso')}>ボタン</button>
      <ServerPage name={name} click={setName} />
    </div>
  )
}
