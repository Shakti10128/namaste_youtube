import { useEffect,useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant';

const UseVideos = () => {
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        getdata();
      },[]);
    
      const getdata = async ()=>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items)
      }
  return videos;
}

export default UseVideos