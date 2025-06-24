import React from 'react';
import Status from "./Status.jsx";
import user from "../assets/user.svg";
import {IoMdSearch} from "react-icons/io";
import {FaRegHeart} from "react-icons/fa";
import {FiShoppingCart} from "react-icons/fi";

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
                    <ul className="menu menu-horizontal px-1 text-base transition duration-300 ease-in-out">
                        <li className="hover:border-b-2 hover:border-gray-500">
                            <a className="hover:text-gray-900">Home</a>
                        </li>
                        <li className="hover:border-b-2 hover:border-gray-500">
                            <a className="hover:text-gray-900">Contact</a>
                        </li>
                        <li className="hover:border-b-2 hover:border-gray-500">
                            <a className="hover:text-gray-900">About</a>
                        </li>
                        <li className="hover:border-b-2 hover:border-gray-500">
                            <a className="hover:text-gray-900">Sign Out</a>
                        </li>
                    </ul>
                </div>
                {/* Cart + Avatar (end) */}
                <div className="navbar-end flex-none">
                    <div className={"relative items-center mr-5 hidden lg:flex"}>
                        <input type="text" placeholder="Search" className="input input-bordered input-sm mr-5 bg-gray-100"/>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(Navbar) || Navbar;
