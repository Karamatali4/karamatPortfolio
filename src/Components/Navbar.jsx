import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="navbar lg:max-w-[75rem] lg:m-auto lg:rounded-b-2xl bg-[#1B1B1B] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/education">Education</NavLink></li>
                            <li><NavLink to="/experience">Expereince</NavLink></li>
                            <li><NavLink to="/skill">Skill</NavLink></li>
                            <li><NavLink to="/project">Project</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact us</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <NavLink className="btn btn-ghost text-xl" to={"/"}>KARAMAT ALI</NavLink>
                </div>
                <div className="navbar-end">

                    <NavLink className="btn btn-ghost" to={"/contact"}>Contact</NavLink>

                </div>
            </div>
        </>
    )
}

export default Navbar