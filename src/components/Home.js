import React from 'react'
import HomeSidebar from './HomeSidebar'
import MainContainer from './MainContainer'

const Home = () => {
  return (
    <div className='flex text'>
      <HomeSidebar/>
      <MainContainer/>
    </div>
  )
}

export default Home