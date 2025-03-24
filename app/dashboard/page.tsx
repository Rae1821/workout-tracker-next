import { getUserByEmail } from "@/actions/auth";
import { auth } from "@/auth";
import Dashboard from "@/components/Dashboard";
// import Dashboard from '@/components/Dashboard'
// import SignOut from '@/components/SignOut'
import SignOut from "@/components/SignOut";
import React from "react";

const MyDashboard = async () => {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  const user = session?.user?.email;
  const userInfo = await getUserByEmail(user as string);

  return (
    <div>
      <h1>Welcome {session?.user?.name}!</h1>
      {userInfo && <Dashboard userProfile={userInfo} />}
      <SignOut />
    </div>
  );
};

export default MyDashboard;
