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
        width={1000}
        height={1000}
        alt="img bg"
        className="w-screen h-screen object-cover absolute top-0 left-0 right-0 bottom-0 z-5"
      />
      {/* <Image
        src="/Assets/animation_vector.svg"
        width={800}
        height={800}
        alt="img bg"
        className="w-auto h-full object-contain absolute  bottom-0 z-6 right-0 scale-75"
      /> */}
      <Animation />

      <div className="container mx-auto flex flex-col justify-center items-start gap-[4rem] h-full z-[200]">
        <div className="z-10">
          <h1 className="h1">Your Visual Collaboration Workspace</h1>
          <h2 className="h2">
            Plan, brainstorm, analyze or design anything together.
          </h2>
        </div>
        <div className="flex flex-col gap-[1rem] z-10">
          {sections.map((data, index) => (
            <div key={index} className="flex items-center gap-[2rem]">
              <Image src={data.icon} width={23} height={23} alt="icon img" />
              <div>{data.label}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-2 z-10">get started</button>
      </div>
    </section>
  );
};

export default Hero;
