import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/lib/db";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
 ...authConfig,
 adapter: PrismaAdapter(db),
 session: {
  strategy: "jwt",
 },
 providers: [
    Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
      }),
 ],
//  pages: {
//   signIn: "/sign-in",
//  },
 callbacks: {
  async jwt({ token, user }) {
   if (user) {
    // get user from db with the email
    // if there is no user with the email, create new user
    // else set the user data to token
   }

   return token;
  },

  async session({ session, token }) {
   if (token) {
    // set the token data to session
   }

   return session;
  },

  redirect() {
   return "/";
  },
 },
});