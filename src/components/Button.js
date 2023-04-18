import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex">
      <button
        className="my-3 mx-2 px-2 rounded-lg text-lg text-black
         bg-gray-200"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
