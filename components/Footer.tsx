import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="custom-clip-path bg-blue-100 flex items-center justify-center ">
      <footer className="container mx-auto flex items-center justify-between">
        <div className="flex items-center text-light">
          <span>Contact Support :</span> support@creately.com
        </div>

        <Link href={"/"}>
          <Image
            src="/Assets/creately_logo.svg"
            alt="logo img"
            width={166}
            height={44}
          />
        </Link>
      </footer>
    </div>
  );
}

export default Footer
