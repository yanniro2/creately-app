"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathName = usePathname();
  const links = [
    { label: "home", href: "/" },
    { label: "product", href: "/product" },
    { label: "pricing", href: "/pricing" },
  ];

  return (
    <div className="w-full h-auto fixed top-0 left-0 z-50 bg-white lg:p-5">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-0">
        <div className="flex items-center justify-between w-full md:p-3">
          <Link href={"/"}>
            <Image
              src="/Assets/creately_logo.svg"
              alt="logo img"
              width={166}
              height={44}
            />
          </Link>

          <button
            className="text-black focus:outline-none sm:block lg:hidden"
            onClick={() => setIsMobile(() => !isMobile)}
            aria-label="Toggle Mobile Menu" // Add an appropriate accessible name here
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 24 24">
              <path d="M3 6h18v3h-18v-3zm0 5h18v3h-18v-3zm0 5h18v3h-18v-3z" />
            </svg>
          </button>
        </div>

        <div className="md:ml-4 hidden lg:block">
          <ul className="flex items-center justify-between gap-[3rem]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href} // Assuming the 'to' prop is used for navigation in React Router
                  className={`${
                    pathName === link.href ? "link-active" : "link"
                  }`}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="btn btn-1 w-max">
              <Link href="/signup" className="w-full h-full">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {isMobile && (
        <div className="lg:hidden w-full">
          <ul className="flex flex-col items-center justify-center mt-4">
            {links.map((link) => (
              <li key={link.href} className="my-2">
                <Link
                  href={link.href}
                  className={`${
                    pathName === link.href ? "link-active" : "link"
                  }`}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="my-2">
              <button className="btn btn-1 w-max">
                <Link href="/signup" className="w-full h-full">
                  sign up
                </Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
