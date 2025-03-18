import { signOut } from "@/auth"
import { Button } from "@/components/ui/button"


const SignOut = () => {
  return (
    <div>
        <h5>Are you sure you want to sign out?</h5>
       <form
        action={async () => {
            "use server"
            await signOut()
        }}
       >
        <Button type="submit">Sign out</Button>
       </form>
    </div>
  )
}

export default SignOut