/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const WorkCard = ({ img, name, description, onClick, githubUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleVisitClick = () => {
    window.open(githubUrl, "_blank");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link hover:opacity-80 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:scale-[1.01] transition-all ease-out duration-300">
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ height: "500px" }}
      >
        <img alt={name} className="h-full w-full object-cover" src={img} />
        {isHovered && (
          <div className="absolute inset-0 bg-opacity-75 bg-black flex items-center justify-center">
            <button
              onClick={handleVisitClick}
              className="transition-all duration-300 ease-out bg-slate-600 hover:bg-gradient-to-r from-slate-800 via-slate-900 to-slate-[#0d0e137a] text-white opacity-80 hover:scale-105 font-bold py-2 px-4 rounded"
            >
              Visit
            </button>
          </div>
        )}
      </div>
      <h1 className="mt-5 pl-3 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl pl-3 opacity-50">
        {description ? description : "Description"}
      </h2>
      {githubUrl && (
        <button
          onClick={handleVisitClick}
          className="mt-4 inline-block transition-all duration-300 ease-out bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:scale-105 font-bold py-2 px-4 rounded"
        >
          Visit Code
        </button>
      )}
    </div>
  );
};

export default WorkCard;
