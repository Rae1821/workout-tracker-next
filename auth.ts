// import NextAuth from "next-auth"
// import Google from "next-auth/providers/google"

import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
// import Credentials from "next-auth/providers/credentials"
// import type { Provider } from "next-auth/providers"
import clientPromise from "./utils/database"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

 
// const providers: Provider[] = [
//     Google({
//         clientId: process.env.AUTH_GOOGLE_ID,
//         clientSecret: process.env.AUTH_GOOGLE_SECRET,
//         async profile(profile) {
//             return {
//                 id: profile.id,
//                 name: profile.name,
//                 email: profile.email,
//                 image: profile.picture,
//             }
//         },
//     }),
//     Credentials({
//         credentials: { password: { label: "Password", type: "password" } },
//         authorize(c) {
//             if (c.password !== "password") {
//                 return null
//             }
//             return { id: "test", name: "Test User", email: "test@example.com", }
//         },
//     }),
// ]

// export const providerMap = providers 
//     .map((provider) => {
//         if (typeof provider === "function") {
//             const providerData = provider()
//             return { id: providerData.id, name: providerData.name} 
//         } else {
//             return { id: provider.id, name: provider.name }
//         }
//     })
//     .filter((provider) => provider.id !== "credentials")

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [Google],
    pages: {
        signIn: "/sign-in",
        signOut: "/sign-out",
        error: "/error",
    },
    callbacks: {
        // jwt({ token,user }) {
        //     if (user) { // User is available during sign-in
        //         token.id = user.id
        //     }
        //     return token
        // },
        async session({ session }) {
            const client = await clientPromise;
            const db = client.db('workout-tracker-next');
            console.log("Mongo is connected")
            const sessionUser = await db.collection('users').findOne({ email
            : session?.user?.email });

            if (sessionUser?.user) {
                session.user.id = sessionUser.user.id
            }
            return session
        },
    },
})



