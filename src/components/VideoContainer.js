import VideoCardShimmer from '../utils/videoCardShimmer';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import UseVideos from '../helper/UseVideos';

const VideoContainer = () => {
  const videosData = UseVideos();

  return videosData.length === 0?<VideoCardShimmer/>:(
    <div className='flex justify-center w-ful flex-wrap h-[83vh] overflow-y-scroll'>
      {
        videosData.map(((video,index)=>
          <div key={index} className='flex flex-col w-[23vw] mx-1 my-5'>
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video}/>
            </Link>
          </div>
          ))
      }
    </div>
  )
}

export default VideoContainer