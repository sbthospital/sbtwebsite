import React from "react";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-4 w-full p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-2 transition duration-300 ease-in-out">
      <div className="bg-[#d5f2ec] p-4 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <h1 className="font-semibold text-xl text-gray-800">{title}</h1>
      <p className="mt-2 text-gray-600">{description}</p>
      <h3 className="mt-4 text-backgroundColor font-semibold hover:text-[#ade9dc] transition duration-300 ease-in-out">
        See more
      </h3>
    </div>
  );
};

export default ServicesCard;
