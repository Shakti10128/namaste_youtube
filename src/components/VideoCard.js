import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const thumbnails = info?.snippet?.thumbnails;
    const  title = info?.snippet?.title;
    const channelTitle = info?.snippet?.channelTitle;
    const views = info?.statistics?.viewCount;
  return (
    <div className=''>
        <img src={thumbnails?.medium?.url} alt="" 
        className='rounded-lg m-2'
        />
        <ul>
            <li className='font-semibold text-lg'>{title}</li>
            <li className='text-gray-500'>{channelTitle}</li>
            <li className='text-gray-500'>{views} views</li>
        </ul>
    </div>
  )
}

export default VideoCard