import React from 'react'

function Experience() {
    return (
        <>

            <div className="containercertification  lg:max-w-[75rem] lg:m-auto h-auto bg-lime-100 lg:rounded-lg ... p-5 text-center lg:mt-10 lg:mb-5">
                <h2 className='text-5xl font-bold  duration-500 hover:underline '>Experience</h2>



                {/* Growup tech */}
                <section className='certificationsection flex flex-col items-start mt-5 gap-8 '>

                    {/* leftside */}
                    <div className="leftside flex flex-col gap-y-10 gap-10 mt-5">
                        <div className="box border-x-8 border-slate-600 p-3 rounded-lg">
                            <h2 className='text-3xl font-bold'>Frontend Developer
                            </h2>
                            <h2 className='text-[#083344] font-bold'>GrowUp Tech Solutions, Islamabad</h2>
                            <h2 className='text-[#164e63] font-bold'>Jan 2022 – Feb 2024</h2>

                        </div>

                    </div>

                    {/* rightside */}
                    <div className="rightside mt-2">
                        <div className="box flex flex-col text-start">
                            <h2 className='font-bold text-lime-950'>Responsibilities:
                            </h2>
                            <ul className='list-item list-disc text-lime-950 leading-7'>
                                <li> Designed Brought mock-ups to life with HTML, CSS, Bootstrap, JavaScript.</li>
                                <li> Created successful websites that met requirements for objectives
                                    Such as load speed design.
                                </li>
                                <li> Collaborated with cross-functional teams to ensure seamless integration of new
                                    technologies and solutions.</li>
                                <li> Provided technical guidance and mentorship to junior team members, fostering a
                                    culture of continuous learning and growth.</li>
                            </ul>
                        </div>
                    </div>

                </section>


                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                {/* Sina technology */}
                <section className='certificationsection flex flex-col items-start mt-5 gap-5 '>

                    {/* leftside */}
                    <div className="leftside flex flex-col gap-10 mt-5">
                        <div className="box border-x-8 border-slate-600 p-3 rounded-lg">
                            <h2 className='text-3xl font-bold'>MERN STACK Developer
                            </h2>
                            <h2 className='text-[#083344] font-bold'>SYNCHCOM (PVT) LTD, Islamabad</h2>
                            <h2 className='text-[#164e63] font-bold'>Jan 2024 – March 2024</h2>

                        </div>

                    </div>

                    {/* rightside */}
                    <div className="rightside mt-2">
                        <div className="box flex flex-col text-start">
                            <h2 className='font-bold text-lime-950'>Responsibilities:
                            </h2>
                            <ul className='list-item list-disc text-lime-950 leading-7'>
                                <li> During my three-month internship at SYNCHCOM (PVT) LTD, I gained extensive
                                    experience in MERN stack development, working on full-stack web applications
                                    with MongoDB, Express.js, React, and Node.js. I managed databases and
                                    created dynamic front-end interfaces.</li>
                                <li> Created successful websites that met requirements for objectives
                                    Such as load speed design.
                                </li>

                            </ul>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Experience