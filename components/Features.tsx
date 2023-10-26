import React from "react";

const Features = () => {
  return (
    <section className="w-screen h-[60vh]">
      <div className="container mx-auto h-full flex">
        <div className="w-1/4 h-full border-[1px] border-primary rounded flex flex-col">
          <div className="w-full h-1/3 border-[1px] border-primary border-l-0 border-b-0 border-r-0 border-t-0 cursor-pointer">
            1
          </div>
          <div className="w-full h-1/3 border-[1px] border-primary border-l-0 border-b-0 border-r-0 cursor-pointer">
            2
          </div>
          <div className="w-full h-1/3 border-[1px] border-primary border-l-0 border-b-0 border-r-0 cursor-pointer">
            3
          </div>
        </div>
        <div className="w-3/4 h-full border-[1px] border-primary rounded">
          3
        </div>
      </div>
    </section>
  );
};

export default Features;
