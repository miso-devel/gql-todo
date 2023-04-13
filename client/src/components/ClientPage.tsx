'use client'

import { useState } from 'react'
import ServerPage from './ServerPage'

const ClientPage = () => {
  const [name, setName] = useState('')
  return (
    <div>
      ClientPage
      <p>{name}</p>
      <button
        onClick={() => {
          setName('miso')
        }}
      >
        button
      </button>
      <ServerPage name={name} />
    </div>
  )
}

export default ClientPage
