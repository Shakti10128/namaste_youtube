import React from 'react'
import Button from './Button'

const buttonlist= ["All","Game","Dancing","Cricket","News","Music","Cooking","Movies","Live","Bollywood Movies","Sports","Game shows","mixes"]

const ButtonsList = () => {
  return (
    <div className='flex'>
    {
      buttonlist.map((name,index)=>{
        return <Button key={index} name={name}/>
      })
    }
    </div>
  )
}

export default ButtonsList