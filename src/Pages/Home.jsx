import React from 'react'
import mypic from "../assets/picture.jpg";
import SocailmediaBtn from '../Components/SocailmediaBtn';
function Home() {
  return (
    // h-[52rem]
    <>
      <div className="container   max-w-[75rem] m-auto lg:flex lg:flex-col justify-center items-center">


    <section className='flex flex-col justify-evenly justify-items-center lg:flex-row  lg:justify-center lg:items-center pt-5 gap-10'>

 {/* left side */}
 <div className="left lg:w-[60%] flex flex-col items-center justify-items-center justify-center gap-6 lg:gap-10 text-center ">
          <h2 className='text-[#FFFFFF] text-6xl'>KARAMAT ALI</h2>
          <p className='text-[#9C9C9C] text-xl'>Spiring MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js, seeking growth opportunities.
            Dedicated to delivering high-quality solutions and enhancing user experiences. </p>
          <button className='text-[#FFFFFF] bg-gradient-to-r from-[#3F8E00]  via-[#4f8f1b] to-[#62BA1B] rounded-md  py-2 px-36 lg:px-10 lg:self-center   hover:bg-gradient-to-r hover:from-[#3F8E00]  hover:to-[#62BA1B] '>About Us  </button>
        </div>
        <hr className='' />

        {/* right side  */}
        <div className="right lg:w-[40%] flex justify-center items-center">

          <img src={mypic} className=' lg:w-[50rem]  rounded-full pb-2

' alt="profile picture" />
        </div>
    </section>
       

        <SocailmediaBtn/>

      </div>
    </>
  )
}

export default Home