// import {  providerMap } from "@/auth"
// import { redirect } from "next/navigation"
// import { AuthError } from "next-auth"
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
import LoginGoogle from "@/components/LoginGoogle"
import Link from "next/link"



const SignIn = async () => {

    // console.log("Provider IDs:", Object.values(providerMap).map(provider => provider.id));

  return (
    <div className="container mt-20 p-8 w-full flex justify-center">
        <div className="flex flex-col w-[400px]">
        <h1 className="mb-6 w-full text-center text-3xl font-bold">Sign in</h1>
{/*     
        <form 
            className="flex flex-col gap-4"
            action={async (formData) => {
                "use server"
                try {
                    await signIn("credentials", formData)
                } catch (error) {
                    if (error instanceof AuthError) {
                        // return redirect(`${SIGNIN_ERROR_URL}?error=${(error as AuthError).type}`)
                        throw error
                    } 
                }
            }}
        >   
            <label htmlFor="email">
                Email
                <Input name="email" type="email" id="email" />
            </label>
            <label htmlFor="password">
                Password
                <Input name="password" type="password" id="password" />
            </label>
            <Button type="submit">
                Sign In
            </Button>
        </form> */}
        {/* {Object.values(providerMap).map((provider) => (
            <form
                key={provider.id}
                className="flex flex-col gap-4 w-full mt-2"
               
                action={async () => {
                    "use server"
                    try {
                        await signIn(provider.id, {
                            redirectTo: "/dashboard",
                        })
                    } catch (error) {
                        if (error instanceof AuthError) {
                            // return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                            throw error
                        }
                        // throw error
                    }
                }}
            >
                <Button type="submit">
                    <span>Sign in with {provider.name}</span>
                </Button>
            </form>
        ))} */}
        </div>
        {/* <LoginGoogle />
         */}
         
    </div>
  )
}

export default SignIn



{/* <div className="container mt-20 flex w-full justify-center">
<section className="flex w-[400px] flex-col">
    <h1 className="mb-6 w-full text-center text-3xl font-bold">Log In</h1>
    <LoginGoogle />
</section>
</div> */}