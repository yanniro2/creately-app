import React from "react";

interface CategoryData {
  index: number;
  label: string;
  slug: string;
  dec: string;
  parah: string;
  listItem: ListItem[];
}

interface ListItem {
  name: string;
  details: string;
  draft: boolean;
}

interface MessageProps {
  data: CategoryData;
}

const Message: React.FC<MessageProps> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col gap-[1rem]">
      <h1 className="h3 ">{data.label}</h1>
      <p className="p-body">{data.dec}</p>

      {data.listItem?.map((item, index) => (
        <div key={index} className="flex items-start gap-[1rem] justify-start">
          <div
            className={`w-3 h-3  rounded-full mt-1 ${
              item.draft ? "bg-disabled" : "bg-dark"
            }`}></div>
          <div className={`${item.draft ? "text-disabled" : "text-dark"}`}>
            <p className="text-[14px] font-regular">{item.name}</p>
            <p className="p-body">{item.details}</p>
          </div>
        </div>
      ))}

      <p className="p-body">{data.parah}</p>
    </div>
  );
};

export default Message;
