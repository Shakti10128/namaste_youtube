import React from 'react'

const commentlist = [
    {
        name:"Shakti Kumar",
        text:"hii i'm learning react from akshay saini sir",
        reply:[
            {
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
        
                ],
            },{
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
        
                ],
            },{
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
        
                ],
            },
        ],
    },
    {
        name:"Shakti Kumar",
        text:"hii i'm learning react from akshay saini sir",
        reply:[
            {
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
                    {
                        name:"Shakti Kumar",
                        text:"hii i'm learning react from akshay saini sir",
                        reply:[
                
                        ],
                    },
                ],
            },{
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
        
                ],
            },
        ],
    },
    {
        name:"Shakti Kumar",
        text:"hii i'm learning react from akshay saini sir",
        reply:[
            {
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
        
                ],
            },{
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
        
                ],
            },{
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
        
                ],
            },{
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
        
                ],
            },{
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
                    {
                        name:"Shakti Kumar",
                        text:"hii i'm learning react from akshay saini sir",
                        reply:[
                
                        ],
                    },{
                        name:"Shakti Kumar",
                        text:"hii i'm learning react from akshay saini sir",
                        reply:[
                
                        ],
                    },{
                        name:"Shakti Kumar",
                        text:"hii i'm learning react from akshay saini sir",
                        reply:[
                
                        ],
                    },
                ],
            },
        ],
    },
    {
        name:"Shakti Kumar",
        text:"hii i'm learning react from akshay saini sir",
        reply:[
            {
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
        
                ],
            },{
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
        
                ],
            },
        ],
    },
    {
        name:"Shakti Kumar",
        text:"hii i'm learning react from akshay saini sir",
        reply:[

        ],
    },
    {
        name:"Shakti Kumar",
        text:"hii i'm learning react from akshay saini sir",
        reply:[

        ],
    },
    {
        name:"Shakti Kumar",
        text:"hii i'm learning react from akshay saini sir",
        reply:[
            {
                name:"Shakti Kumar",
                text:"hii i'm learning react from akshay saini sir",
                reply:[
                    {
                        name:"Shakti Kumar",
                        text:"hii i'm learning react from akshay saini sir",
                        reply:[
                            {
                                name:"Shakti Kumar",
                                text:"hii i'm learning react from akshay saini sir",
                                reply:[
                        
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
]

const Comments = ({data})=>{
    const {name,text} = data;
    return <div className='flex flex-col px-10'>
    <div className='flex justify-start flex-wrap  mt-3 ml-14 rounded-lg'>
        <div>
            <img 
            className='w-8 h-8 m-2 rounded-full'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6I5MDdWxmmANqjT0JCFzFFZ2SQ3BvZsYjl2BCzi91nna1rHc1Ui9R7h_c9Tawo-zAOE&usqp=CAU" alt="" 
            />
        </div>
        <div>
        <h1 className='font-bold text-md'>{name}</h1>
        <h1 className=' flex flex-wrap'>{text}</h1>
        </div>
    </div>
    </div>
}

const CommentReply = ({data})=>{
    return <div className='ml-4'>
       {
        data?.map((item,index)=>{
        return <div key={index}>
            <Comments  data = {item}/>
            <div className='ml-10 '>
            <CommentReply data = {item.reply}/>
            </div>
        </div>
        })
       }
    </div>
}

const Comment = () => {
  return (
    <div>
        <h1 className='ml-20 mt-2 font-bold text-xl text-white'>Comments:</h1>
        <input placeholder='Comments'
        className='w-1/2 ml-28 my-5 border border-black focus:bg-black focus:text-white mx-20'
        />
        <CommentReply data = {commentlist} />
    </div>
  )
}


export default Comment