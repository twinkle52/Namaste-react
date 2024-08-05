import { useState } from "react";
import AccordianList from "./AccordianList";
const ResturantAccordian = ({ data, showItems, setShowIndexItems }) => {
  const handleClick = () => {
    setShowIndexItems();
  };

  return (
    <div>
      <div
        className=" accordianHeader w-7/12 h-10 mx-auto my-7 bg-gray-50 shadow-lg flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg py-1 px-1">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="p-2">
          <svg
            className="-mr-1 h-5 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
          </svg>
        </span>
      </div>
      {showItems && (
        <AccordianList itemCards={data.itemCards} addButton={true} />
      )}
    </div>
  );
};

export default ResturantAccordian;
