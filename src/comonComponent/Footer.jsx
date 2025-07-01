import React from 'react';
import download from "../assets/download.png";
import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
const Footer = () => {
    return (
        <div className={"bg-black text-white py-10 mt-6 sm:mt-8 lg:mt-16"}>
            <div className={"container mx-auto"}>
                <footer className="footer sm:footer-horizontal p-10 lg:p-0">
                    <form className="flex flex-col items-start justify-start gap-y-4">
                        <h6 className="medium-heading">Exclusive</h6>
                        <p className={"small-heading-medium"}>Subscribe</p>
                        <fieldset className="w-80">
                            <label>Get 10% off your first order</label>
                            <div className="join mt-4">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item bg-transparent" />
                                <button className="btn join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                    <nav className={"flex flex-col items-start justify-start gap-y-4"}>
                        <h6 className="small-heading-medium">Support</h6>
                        <address>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</address>
                        <a href={"exclusive@gmail.com"} className="link link-hover">exclusive@gmail.com</a>
                        <a href={"#"} className="link link-hover">+880 123 456 789</a>
                    </nav>
                    <nav className="flex flex-col items-start justify-start gap-y-4">
                        <h6 className="small-heading-medium">Account</h6>
                        <a className="link link-hover">My Account</a>
                        <a className="link link-hover">Login / Register</a>
                        <a className="link link-hover">Cart</a>
                        <a className="link link-hover">Wishlist</a>
                        <a className="link link-hover">Shop</a>
                    </nav>
                    <nav className="flex flex-col items-start justify-start gap-y-4">
                        <h6 className="small-heading-medium">Quick Link</h6>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms Of Use</a>
                        <a className="link link-hover">FAQ</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav className="flex flex-col items-start justify-start gap-y-4">
                        <h6 className="small-heading-medium">Download App</h6>
                        <p className={"text-xs text-text "}>Save $3 with App New User Only</p>
                        <img src={download || ""} alt=""/>
                        <div className="flex items-center gap-x-4 mt-2 text-2xl">
                            <span className={"cursor-pointer hover:scale-105"}> <FaFacebookF/></span>
                            <span className={"cursor-pointer hover:scale-105"}><FaXTwitter/></span>
                            <span className={"cursor-pointer hover:scale-105"}> <FaInstagram/></span>
                            <span className={"cursor-pointer hover:scale-105"}><FaLinkedinIn/></span>
                        </div>
                    </nav>

                </footer>
            </div>
        </div>
    );
};

export default Footer;
