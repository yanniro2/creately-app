"use client";
import React, { useState } from "react";
import Message from "./Message";

interface CategoryData {
  index: number;
  label: string;
  slug: string;
  dec: string;
  listItem: ListItem[]; // Adjust this based on the actual return type
}

interface ListItem {
  name: string;
  details: string;
  draft: boolean;
}

interface CategoryProps {
  category: CategoryData[];
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const [data, setData] = useState(category[0]);
  const [value, setValue] = useState(0);

  const handleClick = (message: any, value: number) => {
    setData(message); // Update the data state with the appropriate message
    setValue(value);
  };

  return (
    <div className="container mx-auto h-full flex">
      <div className="w-1/4 h-full border-[1px]  rounded flex flex-col">
        {category.map((dataItem) => (
          <div
            key={dataItem.index}
            className={`w-full h-1/3 border-[1px] border-primary p-5 flex flex-col gap-[1rem] cursor-pointer border-r-[5px] rounded-none  ${
              dataItem.index === value ? "border-r-primary" : "border-r-light"
            }`}
            onClick={() => handleClick(dataItem, dataItem.index)} // Pass data.label as the message
          >
            <h1 className="h3 ">{dataItem.label}</h1>
            <p className="p-body">{dataItem.dec}</p>
          </div>
        ))}
      </div>
      <div className="w-3/4 h-full border-[1px] border-primary rounded p-5">
        <Message data={data} /> {/* Pass the data object directly */}
      </div>
    </div>
  );
};

export default Category;
