import { ClientPage } from '@/components/ClientPage'
import { ServerPage } from '@/components/ServerPage'
import { Suspense } from 'react'

export default function Sample() {
  return (
    <div>
      <p>サーバーサイド</p>
      <ClientPage />
      <Suspense fallback={<p>loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <ServerPage />
      </Suspense>
    </div>
  )
}
