"use client"

import { Button } from "./ui/button"
import { logOut } from "@/actions/auth"

const SignOut = () => {
  return (
    <Button onClick={() => logOut()}>Sign out</Button>
  )
}

export default SignOut