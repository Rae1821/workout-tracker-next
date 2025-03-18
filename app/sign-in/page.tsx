

import LoginGoogle from "@/components/LoginGoogle"



const SignIn = async () => {


  return (
    <div className="container mt-20 p-8 w-full flex justify-center">
        <div className="flex flex-col w-[400px]">
            <h1 className="mb-6 w-full text-center text-3xl font-bold">Sign in</h1>
        </div>
         <LoginGoogle />
         
         
    </div>
  )
}

export default SignIn

