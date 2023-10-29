import Image from "next/image";
import React from "react";

const Used = () => {
  return (
    <section className="w-screen py-8 md:py-16">
      <div className="container mx-auto flex items-center justify-center flex-col gap-6 px-[1rem]">
        <h1 className="text-lg md:text-2xl text-center">
          Over 5 Million people and 1000’s of teams already use Creately
        </h1>
        <div className="w-full md:w-auto">
          <Image
            src="/Assets/customer_logos.svg"
            width={834}
            height={65}
            alt="company icons"
          />
        </div>
      </div>
    </section>
  );
};

export default Used;
