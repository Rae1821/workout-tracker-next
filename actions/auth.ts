"use server";

import { auth, signIn, signOut } from "@/auth";
import db from "@/lib/db";
// import { connectToDB } from "@/utils/database";
import { revalidatePath } from "next/cache";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Login for google
export async function loginGoogle(formData: FormData) {
  const action = formData.get("action");
  console.log("Action:", action);
  if (typeof action === "string") {
    await signIn(action, { redirectTo: "/dashboard" });
  } else {
    console.error("Action is either null or not a string");
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
