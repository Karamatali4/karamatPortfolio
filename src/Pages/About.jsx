import React from 'react'
import aboutpic from "../assets/aboutpic.jpg";
function About() {
  return (
    <>
      <div className="containerabout lg:max-w-[75rem] lg:m-auto h-auto bg-lime-100 rounded-tl-lg ... p-1">

        <section className='aboutsection flex flex-col items-center lg:flex lg:flex-row lg:justify-between gap-5'>

          {/* leftside */}
          <div className="leftside lg:w-[50%] flex flex-col items-center ps-3 gap-5">

            <h2 className='text-ghost font-bold text-2xl hover:underline hover:text-3xl duration-700 '>About us</h2>
            <p className='text-slate-900 selection:bg-lime-400'>Hi! I'm Karamat Ali, a MERN Stack Developer based in Islamabad. I graduated with a Bachelor's in Software Engineering in 2024. With expertise in MongoDB, Express.js, React, and Node.js, I create dynamic and efficient web applications. I’m passionate about continuous learning and innovation. Welcome to my portfolio!</p>
            <h3 className='text-ghost text-2xl font-bold'>Why You Hire Me!</h3>
            <ul className='list-disc flex flex-col justify-center items-center ps-6 text-black mt-3'>
              <li>A detail-oriented professional with 1 year of experience in software development
                using the MERN Stack in the Entertainment industry.
              </li>
              <li>Experienced as a Software Developer Engineer at SYNCHCOM (PVT) LTD,
                showcasing proficiency in MongoDB, Express.js, React, and Node.js, leading to
                successful project outcomes.
              </li>
              <li>Developed a robust backend using Node.js and Express.js to handle complex  routing
                and optimized performance for high-traffic applications.</li>
              <li>Possesses in-depth knowledge of multiple technology stacks, contributing to an
                efficient development stage of products.</li>
            </ul>
          </div>

          {/* rightside */}
          <div className="rightside lg:clip-custom-clip h-auto overflow-hidden lg:bg-gradient-to-r lg:from-indigo-500 lg:from-10% lg:via-sky-500 lg:via-30% lg:to-indigo-400 lg:to-90% ...	lg:w-[50%] flex justify-center">
            <img src={aboutpic} className='rounded lg:w-96 lg:-rotate-12 ' alt="about picture" />
          </div>

        </section>
      </div>
    </>
  )
}

export default About