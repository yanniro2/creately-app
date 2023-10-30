import Image from "next/image";
import React from "react";

const Card = () => {
  const card = [
    {
      label: "Infinite Visual Canvas",
      details:
        "Powerful yet flexible at its core, Creately can be adapted to any kind of workflow and connects with a multitude of popular platforms.",
      imgUrl: "/Assets/bucket_img_1.png",
    },
    {
      label: "Collaboration",
      details:
        "Work and collaborate however you want. Creately’s capabilities are non-opinionated and are highly customizable.",
      imgUrl: "/Assets/bucket_img_2.png",
    },
    {
      label: "Draw Anything",
      details:
        "From flowcharts to technical UML diagrams or annotating a screenshot, drawing on top of it or a quick sketch of your idea, Creately is the one tool to handle this all.",
      imgUrl: "/Assets/bucket_img_3.png",
    },
  ];
  return (
    <section className="w-full h-auto md:h-[70vh] px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row lg:gap-4 md:gap-8 justify-center items-center h-full  md:py-8 gap-[1rem] pt-[10rem]">
        {card.map((data, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 flex flex-col gap-4 items-center md:items-start">
            <Image
              src={data.imgUrl}
              width={200}
              height={200}
              alt="card img"
              className=" object-cover"
            />
            <h1 className="h3">{data.label}</h1>

            <p aria-hidden="true" className="p-body lg:text-left text-center">
              {data.details}
            </p>

            <button className="btn btn-3 ">get started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
