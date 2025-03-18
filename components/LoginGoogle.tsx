

import { Button } from "./ui/button"
import { loginGoogle } from "@/actions/auth"

const LoginGoogle = () => {
  return (
    <form action={loginGoogle}>
      <Button 
        type="submit"
        name="action"
        value="google"
        >
        Sign in with Google
      </Button>
    </form>
  
  )
}

export default LoginGoogle