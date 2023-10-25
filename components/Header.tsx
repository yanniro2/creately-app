"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathName = usePathname();
  const links = [
    { label: "home", href: "/" },
    { label: "product", href: "/product" },
    { label: "pricing", href: "/pricing" },
  ];
  return (
    <div className="w-screen   h-[6rem] fixed top-0 left-0 right-0 z-[1000] bg-white flex items-center justify-center">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src="/Assets/creately_logo.svg"
            alt="logo img"
            width={166}
            height={44}
          />
        </Link>

        <div>
          <ul className="flex items-center justify-between gap-[4rem]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathName === link.href ? "link-active" : "link"
                  }`}>
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <button className="btn btn-1 ">sign up</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
