"use server"

import { signIn, signOut } from "@/auth";
// import { connectToDB } from "@/utils/database";
import { revalidatePath } from "next/cache";


  // Login for google
  export async function loginGoogle(formData: FormData) {
    const action = formData.get("action");
    if (action) {
      await signIn(action.toString(), { redirectTo: "/dashboard" });
    } else {
      console.error("Action is null");
    } 
  }

  // Logout 
  export async function logOut() {
    await signOut({ redirectTo: "/" });
    revalidatePath("/");
  }

  // Find user by email
  // export const getUserByEmail = async (email: string) => {
  //   const client = await connectToDB();
  //   const db = client.db();
  //   const user = await db.collection("users").findOne({ email });
  //   return user;
  // }