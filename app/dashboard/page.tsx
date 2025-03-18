import { auth } from '@/auth-old';
// import Dashboard from '@/components/Dashboard'
// import SignOut from '@/components/SignOut'
import SignOut from '@/components/SignOut'
import React from 'react'

const MyDashboard = async () => {
    const session = await auth();

    if (!session?.user) {
        return null
    }

  return (
    <div>
      <h1>Welcome {session?.user?.name}!</h1>
        {/* <Dashboard /> */}
        <SignOut />
    </div>
  )
}

export default MyDashboard