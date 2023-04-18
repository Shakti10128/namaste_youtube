import React from "react";

const VideoCardShimmer = () => {
  return (
    <div className="flex justify-center w-ful flex-wrap h-[83vh] overflow-y-scroll">
      {Array(21)
        .fill("")
        .map((item, index) => (
          <div className=" w-[23vw] h-60 mx-2 my-5 bg-gray-400 rounded-lg" key={index}>
            <img src="" alt="" className="rounded-lg bg-slate-50" />
            <ul>
              <li className="font-semibold text-lg  bg-slate-50"></li>
              <li className="text-gray-500"></li>
              <li></li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default VideoCardShimmer;
