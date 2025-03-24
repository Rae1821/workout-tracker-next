interface ProfileDetails {
  id: string | null;
  name: string | null;
  email: string | null;
}

const Dashboard = ({ userProfile }: { userProfile: ProfileDetails }) => {
  return (
    <div>
      <h1 className="text-teal-400 text-2xl">Hello, {userProfile.name} </h1>
    </div>
  );
};

export default Dashboard;
