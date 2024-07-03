import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
  const pathName = usePathname();

  const navLinks = (
    <>
      <li
        className={`px-8 py-4 text-xl ${
          pathName === "/" ? "bg-primary" : "bg-none"
        }`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`px-8 py-4 text-xl ${
          pathName === "/projects" ? "bg-primary" : "bg-none"
        }`}
      >
        <Link href="/projects">Projects</Link>
      </li>
      <li
        className={`px-8 py-4 text-xl ${
          pathName === "/about" ? "bg-primary" : "bg-none"
        }`}
      >
        <Link href="/about">About</Link>
      </li>
      <li
        className={`px-8 py-4 text-xl ${
          pathName === "/contact" ? "bg-primary" : "bg-none"
        }`}
      >
        <Link href="/contact">Contact</Link>
      </li>
      <li
        className={`px-8 py-4 text-xl ${
          pathName === "/blogs" ? "bg-primary" : "bg-none"
        }`}
      >
        <Link href="/blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <>
      <ul className="flex-col justify-center items-center space-y-2">
        {navLinks}
      </ul>
    </>
  );
}

export default Sidebar;
