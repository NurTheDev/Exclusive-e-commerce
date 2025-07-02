import React from 'react';
import Status from "./Status.jsx";
import user from "../assets/user.svg";
import {IoMdSearch} from "react-icons/io";
import {FaRegHeart, FaRegUser, FaShoppingBag} from "react-icons/fa";
import {FiShoppingCart, FiStar} from "react-icons/fi";
import {BiCollection} from "react-icons/bi";
import {CgLogOut} from "react-icons/cg";
import {NavLink} from "react-router";
import {NavbarData} from "../data/data.js";
const Navbar = () => {
    return (
        <>
            <div>
                <Status/>

            </div>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="h-5 w-5"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            <li><a>Home</a></li>
                            <li>
                                <a>Parent</a>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="cursor-pointer medium-heading ">Exclusive</a>
                </div>
                {/* Desktop menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        {NavbarData.map((item, index)=>(
                            <li key={index} className="relative group">
                                <NavLink to={item.link} key={index} className={``}>
                                    {({ isActive }) => (
                                        <>
                                            {isActive ? (
                                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary2 transition-all duration-300 ease-out group-hover:w-full"></span>
                                            ) : (
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary2 transition-all duration-300 ease-out "></span>
                                            )}
                                            <span className="relative">{item.title}</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cart + Avatar (end) */}
                <div className="navbar-end flex-none">
                    <div className={"relative items-center mr-5 hidden lg:flex"}>
                        <input type="text" placeholder="Search"
                               className="input input-bordered input-sm mr-5 bg-gray-100"/>
                        <span
                            className={"absolute right-4 px-2 cursor-pointer text-2xl z-10 text-gray-500 hover:text-gray-600"}>
                            <IoMdSearch/>
                        </span>
                    </div>
                    {/* Cart dropdown */}
                    <div className="dropdown dropdown-end flex items-center">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <span className={" text-xl"}><FiShoppingCart/></span>
                                <span
                                    className=" indicator-item bg-red-500 text-white rounded-full border border-white w-5 h-5 text-xs">8</span>
                            </div>
                        </div>
                        <div className=" ml-4">
                            <span className={"cursor-pointer text-xl"}><FaRegHeart/></span>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
                        >
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Avatar dropdown */}
                    <div className="dropdown dropdown-end ml-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User avatar"
                                    src={user || ""}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu text-white font-poppins
                             bg-transparent-bg  dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow backdrop-blur-md"
                        >
                            <li>
                                <a className="justify-between w-full">
                                    <span
                                        className={"flex gap-x-2 items-center"}><FaRegUser/> <span>Profile</span></span>

                                    <span className="badge bg-red-500 text-white">New</span>
                                </a>
                            </li>
                            <li><a
                                className="justify-start gap-x-2 w-full items-center"><span><FaShoppingBag/></span><span>My order</span></a>
                            </li>
                            <li><a
                                className="justify-start gap-x-2 w-full items-center"><span><BiCollection/></span><span>Collections</span></a>
                            </li><li><a
                                className="justify-start gap-x-2 w-full items-center"><span><FiStar/></span><span>My Review</span></a>
                            </li>
                            <li><a
                                className="justify-start gap-x-2 w-full items-center"><span><CgLogOut  /></span><span>Log out</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className={"mb-4 bg-black/30 opacity-30"}/>

        </>
    );
};

export default React.memo(Navbar);
