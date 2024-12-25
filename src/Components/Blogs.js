import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {

    //consume
    const {posts,loading} = useContext(AppContext);
    console.log("Printing Post's Data");
    console.log(posts);

  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 
    mt-[70px] mb-[70px] justify-center items-center min-h-[calc(100vh-136px)]'>
        {
            loading ? (<div className='flex items-center justify-center h-full'><Spinner/></div>) : (
              posts.length === 0 ? 
              (<div>
                <p>No Post Found</p>
              </div>)
               : 
               (posts.map((post) => (
                  <div key={post.id}>

                      <p className='font-bold text-lg'>{post.title}</p>
                      <p className='text-sm mt-[4px]'>
                        By <span className='italic'>{post.author}</span> on  <span> </span> 
                        <span className='underline font-bold'>{post.category}</span>
                      </p>
                      <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                      <p className='text-md mt-[14px]'>{post.content}</p>
                      <div className='flex gap-x-3'>
                        {post.tags.map((tag,index) => {
                          return <span className='font-bold underline text-blue-700 text-xs mt-[5px]' 
                          key={index}>{`#${tag}`}</span>;
                        })}
                      </div>

                  </div> 
               )))
            )
        }
    </div>
  )
}

export default Blogs