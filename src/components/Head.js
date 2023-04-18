import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/AppSlice';
import { Outlet, Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_QUERY } from '../utils/constant';
import { cacheSlice } from '../utils/SearchSlice';

const Head = () => {
  // const [suggetionValue,setSuggestionValue] = useState("");
  const [searchQuery,setSearchQuery] = useState("");
  const [searchQueryData,setSearchQueryData] = useState([]);
  const [showSearchBar,setShowSearchBar] = useState(false);
  const dispatch = useDispatch();
  const cacheSuggetion = useSelector(Store=>Store.search);

  const showHide = ()=>{
    dispatch(toggleMenu());
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(cacheSuggetion[searchQuery]){
        setSearchQueryData(cacheSuggetion[searchQuery]);
      }
      else{
        getSearchQueryData()
      }
    },200);
    return(()=>{
      clearTimeout(timer);
    });
  },[searchQuery]);


  const getSearchQueryData = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_QUERY + searchQuery)
    const json = await data.json();
    setSearchQueryData(json[1]);

    dispatch(cacheSlice({
      [searchQuery]:json[1],
    }))
  }

  return (
    <div className='grid grid-flow-col shadow-md'>

      <div className=' grid-cols-1 flex'>
        <button onClick={()=>showHide()}>
          <img alt='menu-toggle' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFKZpHK4JrBrhCmzcCBsjdFkIqjJ63uIjHg&usqp=CAU'
        className='w-8 h-6 mx-3 cursor-pointer'/>
        </button>
        <Link to="/">
        <img alt='youtube-log' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png'
        className='w-28 cursor-pointer'
        />
        </Link>
      </div>

      <div className='grid-cols-10'>
        <div>
        <input type='text' className='w-[35vw] px-2 mt-3 py-1 text-lg border border-black rounded-l-full' placeholder='Search'
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        onFocus={()=>setShowSearchBar(true)}
        onBlur={()=>setShowSearchBar(false)}
        />
        <button className='border border-black rounded-r-full w-10 py-1 text-lg'>🔍</button>
        </div>
        {showSearchBar && <div className='z-10 fixed my-1 bg-gray-100 w-[35vw] rounded-xl'>
          <ul>
              {
                searchQueryData.map((item,index)=>
                <li key={index} className='m-2  border-gray-300 cursor-default hover:bg-gray-200'>🔍 {item}</li>
                )
              }
          </ul>
        </div>}
      </div>

      <div className='grid-col-1 flex justify-end pr-5'>
        <img alt='admin' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6I5MDdWxmmANqjT0JCFzFFZ2SQ3BvZsYjl2BCzi91nna1rHc1Ui9R7h_c9Tawo-zAOE&usqp=CAU'
        className='w-8 h-9 mt-3'
        />
      </div>
      <Outlet/>
    </div>
  )
}

export default Head;