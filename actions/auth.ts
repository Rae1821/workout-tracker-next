"use server"

import { signIn, signOut } from "@/auth";
import clientPromise from "@/utils/database";
import { revalidatePath } from "next/cache";


// login for any social provider
export const login = async (provider: string) => {
    await signIn(provider, { redirectTo: "/dashboard" })
      .then((r) => {
        console.log("there was a result");
        console.log(r);
      })
      .catch((e) => {
        console.log("there was an error");
        console.log(e);
      });
    revalidatePath("/dashboard");
  };

  // Login for google
  export async function loginGoogle(formData: FormData) {
    const action = formData.get("action");
    console.log(clientPromise);
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
  export const getUserByEmail = async (email: string) => {
    try {
      const usersCollection = await getCollection("users");
      const user = await usersCollection.findOne({ email });
      return user;  
    } catch (error) {
      console.log("Error fetching user by email:", error);
    }
  }