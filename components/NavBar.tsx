import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="w-full px-4 py-8 sm:p-8 flex flex-row space-x-2">
      <Link href="/">
        <span className="text-xl font-bold text-white hover:opacity-90 cursor-pointer">
          J.A. Kiviranta
        </span>
      </Link>
    </nav>
  );
};
