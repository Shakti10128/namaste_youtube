import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const HomeSidebar = () => {
  const isMenu = useSelector(Store => Store.app.isMenuOpen);
  if(!isMenu){
    return null;
  }
  return (
    <div className=' w-[15%]'>

        {/* Home */}
      <div className='flex w-96 ml-1 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPGDETd4DKXhaetx8iBW3GhT3XDE9_12bkeisP7kbRitBdRaX0Vm6hj6VqU5vBpKcMEI&usqp=CAU" alt="" 
          className='w-12 rounded-full'/>
        <ul>
          <Link to="/"><li className='text-base font-semibold'>Home</li></Link>
        </ul>
      </div>

        {/* shorts */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtb2k8yyVNarChoyrBqCYVtj8ilsrZkn_fwgxDCM7BBVeJaRWodP29CXvs9OTRD0llPS4&usqp=CAU" alt="" 
          className='w-10 rounded-full'/>
        <ul>
          <li className='text-base font-semibold'>Shorts</li>
        </ul>
      </div>
      
      {/* subscriptions */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://static.thenounproject.com/png/4530414-200.png" alt="" 
          className='w-8 ml-2 rounded-full'/>
        <ul>
          <li className='text-base font-semibold'>Subscriptions</li>
        </ul>
      </div>
      <hr className='h-0.5 w-52 ml-3 m-3 bg-black'/>
      {/* library */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://cdn-icons-png.flaticon.com/512/2989/2989835.png" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='text-base ml-2 font-semibold'> Library</li>
        </ul>
      </div>
      {/* history */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='text-base ml-2 font-semibold'>History</li>
        </ul>
      </div>
      {/* your videos */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://static.thenounproject.com/png/1261644-200.png" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='text-base ml-2 font-semibold'>Your vidoes</li>
        </ul>
      </div>
      {/* watch later */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/watch-later-1781603-1513853.png" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='text-base ml-2 font-semibold'>Watch later</li>
        </ul>
      </div>
      {/* likded videos */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmElKXPOxbctSmD6iuZ3cjfjTgTbZTs20q5A&usqp=CAU" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='text-base ml-2 font-semibold'>Liked videos</li>
        </ul>
      </div>

      <hr className='h-0.5 w-52 ml-3 m-3 bg-black'/>
      <h1 className='text-base font-bold ml-2'>Explore</h1>

      {/* treding */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://icon-library.com/images/trending-icon/trending-icon-16.jpg" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='text-base ml-3 font-semibold'>Treding</li>
        </ul>
      </div>
      {/* Shopping */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://cdn-icons-png.flaticon.com/512/2211/2211039.png" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='text-base ml-3 font-semibold'>Shopping</li>
        </ul>
      </div>
      {/* Music */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1311cWGB2XmnDbU360Bh-vvzW0PhAO7DszA&usqp=CAU" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='text-base ml-3 font-semibold'>Music</li>
        </ul>
      </div>
      {/* Live */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw_BGK4LoxmaDMGoNC-fLqueYWTOoj9QLOTQjaPI-yhoDqHP2r10TBCdEN9wMXFCi9uY&usqp=CAU" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='text-base ml-3 font-semibold'>Live</li>
        </ul>
      </div>

      {/* Gaming */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/youtube-gaming-4627159-3853350.png" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='text-base ml-3 font-semibold'>Gaming</li>
        </ul>
      </div>
      {/* News */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://c8.alamy.com/comp/2B3HCP4/youtube-icon-2B3HCP4.jpg" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='xl:text-black text-base ml-3 font-semibold sm:text-orange-500'>News</li>
        </ul>
      </div>
      {/* Sports */}
      <div className='flex w-96 ml-2 items-center h-9 pt-1 hover:cursor-pointer hover:text-gray-700'>
          <img src="https://c8.alamy.com/comp/2B3HCP4/youtube-icon-2B3HCP4.jpg" alt="" 
          className='w-6 ml-2 rounded-full'/>
        <ul>
          <li className='xl:text-black text-base ml-3 font-semibold sm:text-orange-500'>Sports</li>
        </ul>
      </div>

    </div>
  )
}

export default HomeSidebar