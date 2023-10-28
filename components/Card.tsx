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
    <section className="w-screen h-[60vh]">
      <div className="container mx-auto h-full flex gap-[3rem] justify-center items-center py-[2rem]">
        {card.map((data, index) => (
          <div
            key={index}
            className="w-1/3 h-full flex flex-col gap-[1rem] items-start justify-between py-[2rem]">
            <Image
              src={data.imgUrl}
              width={200}
              height={200}
              alt="card img"
              className=" object-cover"
            />
            <h1 className="h3">{data.label}</h1>

            <p className="p-body">{data.details}</p>

            <button className="btn btn-3 ">get started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
