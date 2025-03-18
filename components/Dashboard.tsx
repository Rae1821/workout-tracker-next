

import { auth } from "@/auth-old"


const Dashboard =  async () => {
  const session = await auth();

  if (!session?.user) {
    return null
  }

  return (
    <div>
      
        <h1 className="text-red-300 text-2xl">Hello, {session?.user?.name} </h1>
    </div>
  )
}

export default Dashboard