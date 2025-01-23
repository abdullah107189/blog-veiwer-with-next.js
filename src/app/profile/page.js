import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    console.log("its hits...........");
    redirect("/api/auth/login");
  }
  return (
    <div className="bg-white md:p-10 p-5 md:my-10 my-5 rounded-3xl">
      <h1 className="md:text-4xl text-xl  font-semibold text-center md:my-10 my-5">
        hello {user?.family_name}
      </h1>
      <p className="md:text-5xl text-2xl font-semibold text-center">
        Welcome to your profile!!
      </p>
    </div>
  );
};

export default ProfilePage;
