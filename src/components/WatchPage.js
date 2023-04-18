import React, { useEffect } from "react";
import { Link,useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";
// import HomeSidebar from "./HomeSidebar";
import { useDispatch } from "react-redux";
import { closeMenu, showMenu } from "../utils/AppSlice";
import Comment from "./Comment";
import UseVideos from "../helper/UseVideos";
const WatchPage = () => {
  const videos = UseVideos();
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const id = params.get("v");
  useEffect(() => {
    dispatch(closeMenu());
    return () => {
      dispatch(showMenu());
    };
  });
  return (
    <div className="flex">
      <div className="flex flex-col">
      <div className=" shadow-md ">
        <iframe
          className="ml-20 mt-2"
          width="950"
          height="550"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
        <Comment />
        </div>

      <div className="flex flex-col mx-14 my-5">
          {
            videos.map((video=>
              <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard info={video}/></Link>
              ))
          }
      </div>

    </div>
  );
};

export default WatchPage;
