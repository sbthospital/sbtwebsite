import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-[rgb(0,71,171)] text-white px-4 py-2 rounded-md hover:bg-[rgb(0,61,150)] transition duration-300 ease-in-out">
        {title}
      </button>
    </div>
  );
};

export default Button;
