"use client"

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";


const Dashboard =  () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
 

  return (
    <div>
      <Image
        src={user?.picture}
        alt={user?.name}
        width={25}
        height={25}
        className="rounded-full"
      />
        <h1 className="text-red-300 text-2xl">Hello, {user?.name} </h1>
        <p>{user?.email}</p>
    </div>
  )
}

export default Dashboard