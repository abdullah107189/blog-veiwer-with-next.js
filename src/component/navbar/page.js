import Link from "next/link";
import React from "react";

const NavbarPage = () => {
  return (
    <div className="flex gap-5 py-2 bg-gray-400">
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
  );
};

export default NavbarPage;
