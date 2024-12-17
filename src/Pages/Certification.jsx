import React from 'react'
import certificate from "../assets/certificate.png";
import navttccertificate from "../assets/navttccertificate.jpg";
import internationalcertificate from "../assets/internationalcertificate.jpg";
function Certification() {
    return (
        <>
            <div className="containercertification lg:max-w-[75rem] lg:m-auto h-auto bg-lime-100 lg:rounded-lg ... p-5 text-center lg:mt-10 lg:mb-5">
                <h2 className='text-4xl font-bold hover:text-5xl duration-500 hover:underline'>Certification</h2>



                {/* Navttc certification */}
                <section className='certificationsection flex flex-col items-center  gap-5 '>

                    {/* leftside */}
                    <div className="leftside flex flex-col gap-10 mt-5">
                        <div className="box border-x-8 border-slate-600 p-3 rounded-lg">
                            <h2 className='text4xl font-bold'>NAVTTC MERN STACK COURSE</h2>
                            <h2>Duration: 3 Month</h2>
                        </div>

                    </div>

                    {/* rightside */}
                    <div className="rightside">
                        <img src={navttccertificate} className='rounded-md' alt="certificate" />
                    </div>

                </section>

<hr class="h-px my-8 bg-gray-500 bg-ghost border-0  dark:bg-gray-500 rounded-4xl"/>

{/* International javascript certification */}
<section className='internationalcertificationsection flex flex-col items-center  gap-5 '>

{/* leftside */}
<div className="leftside flex flex-col gap-10 mt-5">
    <div className="box border-x-8 border-slate-600 p-3 rounded-lg">
        <h2 className='text4xl font-bold'>International Javascript Certification</h2>
    </div>

</div>

{/* rightside */}
<div className="rightside">
    <img src={internationalcertificate} className='rounded-md' alt="certificate" />
</div>
</section>

<hr class="h-px my-8 bg-gray-500 bg-ghost border-0  dark:bg-gray-500"/>


            {/* other certification */}
                <section className='certificationsection flex flex-col items-center lg:flex lg:flex-row lg:justify-evenly gap-5 mt-5'>

                    {/* leftside */}
                    <div className="leftside flex flex-col gap-10 mt-5">
                        

                        <div className="box border-x-8 border-slate-600 p-3 rounded-lg">
                            <h2 className='text4xl font-bold'>Hadi E-Learning React js COURSE</h2>
                            <h2>Duration: 3 Month</h2>
                        </div>

                        <div className="box border-x-8 border-slate-600 p-3 rounded-lg">
                            <h2 className='text4xl font-bold'>Hitech Artificail Course COURSE</h2>
                            <h2 className='text3xl font-bold'>Three Module</h2>
                            <h2 className='text2xl font-bold'>Machine Learning</h2>
                            <h2 className='text2xl font-bold'>Data Science</h2>
                            <h2 className='text2xl font-bold'>Blockchain</h2>

                            <h2>Duration: 6 Month</h2>
                        </div>

                    </div>

                    {/* rightside */}
                    <div className="rightside">
                        <img src={certificate} alt="certificate" />
                    </div>

                </section>
            </div>
        </>
    )
}

export default Certification