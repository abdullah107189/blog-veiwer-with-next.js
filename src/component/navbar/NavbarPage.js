import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
const NavbarPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="bg-white">
      <div className="flex py-2 items-center justify-between sticky top-0 z-10 max-w-[1440px] mx-auto px-2">
        <>
          <a href="/" className="text-2xl font-bold">
            <span className="text-blue-400">B</span>P
          </a>
        </>
        <div className="flex gap-5">
          <Link
            className="bg-blue-400/20 text-blue-400 font-semibold px-4 py-1 rounded-lg"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="bg-blue-400/20 text-blue-400 font-semibold px-4 py-1 rounded-lg"
            href={"/profile"}
          >
            Profile
          </Link>
        </div>
        <>
          {user ? (
            <button className="bg-blue-400/20 text-blue-400 font-semibold px-4 py-1 rounded-lg">
              <LogoutLink>Log out</LogoutLink>
            </button>
          ) : (
            <button className="bg-blue-400/20 text-blue-400 font-semibold px-4 py-1 rounded-lg">
              <LoginLink>Login</LoginLink>
            </button>
          )}
        </>
      </div>
    </div>
  );
};

export default NavbarPage;
