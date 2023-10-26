"use client";
import React, { useState } from "react";

const Features = () => {
  const category = [
    {
      index: 1,
      label: "Infinite Visual Canvas",
      dec: "Powerful yet flexible at its core, Creately can be adapted to any kind of workflow and connects with a multitude of popular platforms.",
      message: "message 1",
    },
    {
      index: 2,
      label: "Collaboration",
      dec: "Work and collaborate however you want. Creately’s capabilities are non-opinionated and are highly customizable.",
      message: "message 2",
    },
    {
      index: 3,
      label: "Draw Anything",
      dec: "From flowcharts to technical UML diagrams or annotating a screenshot, drawing on top of it or a quick sketch of your idea, Creately is the one tool to handle this all.",
      message: "message 3",
    },
  ];
  const [data, setData] = useState("hello message");
  const [value, setValue] = useState(1);

  const handleClick = (message: any, value: number) => {
    setData(message);
    setValue(value);
  };
  return (
    <section className="w-screen h-[60vh]">
      <div className="container mx-auto h-full flex">
        <div className="w-1/4 h-full border-[1px]  rounded flex flex-col">
          {category.map((data, index) => (
            <div
              key={data.index}
              className={`w-full h-1/3 border-[1px] border-primary   p-5 flex flex-col gap-[1rem] cursor-pointer border-r-[5px] rounded-none  ${
                data.index === value ? "border-r-primary" : "border-r-light"
              }`}
              onClick={() => handleClick(data.message, data.index)}>
              <h1 className="h3 ">{data.label}</h1>
              <p className="p-body">{data.dec}</p>
            </div>
          ))}
        </div>
        <div className="w-3/4 h-full border-[1px] border-primary rounded p-5">
          {data}
        </div>
      </div>
    </section>
  );
};

export default Features;
