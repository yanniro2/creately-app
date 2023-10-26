import Image from "next/image";
import React from "react";

const Used = () => {
  return (
    <section className="w-screen py-[2rem]">
      <div className="container mx-auto flex items-center justify-center flex-col gap-[2rem]">
        <h1 className="h2">
          Over 5 Million people and 1000’s of teams already use Creately
        </h1>
        <Image
          src="/Assets/customer_logos.svg"
          width={834}
          height={65}
          alt="company icons"
        />
      </div>
    </section>
  );
};

export default Used;
