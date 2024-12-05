import React from 'react'
import mypic from "../assets/picture.jpg";
function Home() {
  return (
    // h-[52rem]
    <>
      <div className="container   max-w-[75rem] m-auto flex flex-col justify-evenly justify-items-center pt-5 gap-10">

        <div className="left flex flex-col justify-items-center justify-center gap-6 text-center ">
          <h2 className='text-[#FFFFFF] text-6xl'>KARAMAT ALI</h2>
          <p className='text-[#9C9C9C] text-xl'>spiring MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js, seeking growth opportunities. 
          Dedicated to delivering high-quality solutions and enhancing user experiences. </p>
          <button className='text-[#FFFFFF] bg-gradient-to-r from-[#3F8E00]  via-[#4f8f1b] to-[#62BA1B] rounded-md p-2 px-2 lg:px-10 hover:bg-gradient-to-r hover:from-[#3F8E00]  hover:to-[#62BA1B] '>About Us  </button>
        </div>
<hr />
        <div className="right flex justify-center items-center">

    <img src={mypic} className=' lg:w-96 rounded-full pb-2

' alt="profile picture" />
        </div>
      </div>
    </>
  )
}

export default Home