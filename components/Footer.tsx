import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-[50vh] flex items-end">
      <div className="custom-clip-path bg-blue-100 flex items-end justify-center pb-[5%]">
        <footer className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-0">
          <div className="text-light text-center md:text-left mb-4 md:mb-0">
            <span>Contact Support :</span> support@creately.com
          </div>
          <div className="mt-4 md:mt-0">
            <Link href={"/"}>
              <Image
                src="/Assets/creately_logo.svg"
                alt="logo img"
                width={166}
                height={44}
              />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
