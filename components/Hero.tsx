import Image from "next/image";
import React from "react";
import Animation from "./Animation";

const Hero = () => {
  const sections = [
    { label: "Infinite Visual Canvas", icon: "/Assets/icon_1.svg" },
    { label: "1000's of Visual Templates", icon: "/Assets/icon_2.svg" },
    { label: "Business & Technical Diagramming", icon: "/Assets/icon_3.svg" },
    { label: "Video Conferencing", icon: "/Assets/icon_4.svg" },
  ];

  return (
    <section className="w-screen h-screen relative">
      <Image
        src="/Assets/header_bg.svg"
        layout="fill"
        objectFit="cover"
        alt="img bg"
        className="w-screen h-screen object-cover absolute top-0 left-0 right-0 bottom-0 z-5"
      />

      <Animation />

      <div className="container mx-auto flex flex-col justify-center items-center md:items-start gap-8 md:gap-16 h-screen relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">
            Your Visual Collaboration Workspace
          </h1>
          <h2 className="text-lg md:text-2xl mt-4 md:mt-6">
            Plan, brainstorm, analyze, or design anything together.
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:gap-8">
          {sections.map((data, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-8">
              <Image src={data.icon} width={23} height={23} alt="icon img" />
              <div className="text-sm md:text-base" role="dialog">
                {data.label}
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-2 mt-8 md:mt-12">get started</button>
      </div>
    </section>
  );
};

export default Hero;
