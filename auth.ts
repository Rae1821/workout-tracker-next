import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/lib/db";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
 adapter: PrismaAdapter(db),
 session: {
  strategy: "jwt",
 },
 providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        name: {
          label: "Name",
          type: "name",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const name = credentials.name as string;
        const email = credentials.email as string;

        let user = await db.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          user = await db.user.create({
            data: {
              name,
              email,
            },
          });
        } else if (!user.name || !user.email) {
          throw new Error("User data is incomplete");
        }
        return user;
      },
    })
 ],
//  callbacks: {
//   async jwt({ token, user }) {
//    if (user) {
//     // get user from db with the email
//     // if there is no user with the email, create new user
//     // else set the user data to token
//    }

//    return token;
//   },

//   async session({ session, token }) {
//    if (token) {
//     // set the token data to session
//    }

//    return session;
//   },

//   redirect() {
//    return "/";
//   },
//  },
});