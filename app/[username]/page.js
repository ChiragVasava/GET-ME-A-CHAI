"use client"

import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { useRouter } from 'next/navigation'

const UsernamePage = ({ params }) => {
  const router = useRouter()
  const { username } = React.use(params) // ✅ unwrap the promise

  return (
    <div>
      <h1>User Profile: {username}</h1>
      <button onClick={() => router.push('/')}>Go Home</button>
      <PaymentPage username={username} />
    </div>
  )
}

export default UsernamePage
