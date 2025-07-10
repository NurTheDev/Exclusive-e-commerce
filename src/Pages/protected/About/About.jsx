import React from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import aboutBannder from "../../../assets/aboutBanner.jpg"
import {aboutUs} from "../../../data/data.js";
import {getImgUrl, getSettings} from "../../../utils/index.js";
import Slider from "react-slick";
import {team} from "../../../data/data.js";
import {FaXTwitter} from "react-icons/fa6";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import FacilitySection from "../home/Component/Facility.jsx";

const TeamCard = () => {
    const settings = getSettings("team")
    return (
        <Slider {...settings}>
            {team?.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-y-5 lg:px-5 max-w-[370px] h-full mx-auto"
                >
                    <div className="bg-secondaryColor px-16 pt-10 pb-0 rounded-lg overflow-hidden w-full">
                        <img
                            src={getImgUrl(item.image)}
                            alt={item.name}
                            className="h-72 w-full object-cover object-top mx-auto block"
                        />
                    </div>
                    <div className="text-center space-y-2 mt-5">
                        <h2 className="large-heading-semi-bold">{item.name}</h2>
                        <p className="normal-text">{item.position}</p>
                        <div className={"text-lg flex justify-center gap-x-5 mt-5"}>
                            <span
                                className=" cursor-pointer hover:text-secondary2 transition-all duration-300 hover:scale-110"
                                onClick={() => window.open(item.social, "_blank")}><FaXTwitter/></span><span
                            className=" cursor-pointer hover:text-secondary2 transition-all duration-300 hover:scale-110"
                            onClick={() => window.open(item.social, "_blank")}><FaInstagram /></span><span
                            className=" cursor-pointer hover:text-secondary2 transition-all duration-300 hover:scale-110"
                            onClick={() => window.open(item.social, "_blank")}><FaLinkedin/></span><span
                            className=" cursor-pointer hover:text-secondary2 transition-all duration-300 hover:scale-110"
                            onClick={() => window.open(item.social, "_blank")}><FaFacebook/></span>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    )
}
const About = () => {
    return (
        <div className={"container mx-auto p-6 lg:p-0"}>
            <Breadcrumbs/>
            <div className={"mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center"}>
                <div className={"flex justify-center items-start order-2 flex-col gap-y-5 lg:px-10 lg:order-1"}>
                    <h1 className={"xl-heading-semi-bold"}>Our Story</h1>
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
                        presense in Bangladesh. Supported by wide range of tailored marketing, data and service
                        solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across
                        the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a
                        diverse assotment in categories ranging from consumer.</p>
                </div>
                <div className={"order-1 lg:order-2"}>
                    <img src={aboutBannder || ""} alt=""/>
                </div>
            </div>
            <div className={"mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 "}>
                {aboutUs?.map((item, index) => (
                    <div key={index}
                         className="flex flex-col items-center justify-center group rounded-sm border py-6 w-full border-black/30 hover:shadow-lg hover:scale-95 transition-all duration-300 cursor-pointer hover:bg-secondary2 hover:text-white">
                        <img
                            src={getImgUrl(item.image) || ""}
                            alt={""}
                            className="w-24 h-24 object-cover mb-4 rounded-full transition-all duration-300 group-hover:scale-105 group-hover:invert"
                        />
                        <h3 className={"large-heading-semi-bold mt-4"}>{item.title}</h3>
                        <p className={"normal-text mt-2"}>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className={"mt-10 lg:mt-20"}>
                <TeamCard/>
            </div>
            <div className={"mt-20 lg:my-40"}>
                <FacilitySection/>
            </div>
        </div>
    );
};

export default About;
