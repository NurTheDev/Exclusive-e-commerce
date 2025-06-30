import React from "react";
import {MdArrowForwardIos} from "react-icons/md";
import Slider from "react-slick";
import {getBannerImg, getSettings} from "../../../../utils/index.js";
import {useGetProductCategoriesListQuery} from "../../../../features/API/productAPI.js";
import {bannerData} from "../../../../data/data.js";
const Banner = () => {
const settings = getSettings("banner")
    const {data} = useGetProductCategoriesListQuery()
    console.log(data)
    return (
        <div className={"container mx-auto"}>
            <div >
                <div className={"lg:grid grid-cols-4"}>
                    {/*Menu bar start*/}
                    <ul className={"menu rounded-box w-full font-poppins"}>
                        {data?.map((item, index) => (
                            <li key={index}>
                                <a className="w-full text-left font-medium text-black">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/*Menu bar start*/}
                    {/*    CustomCarousel Image start*/}
                    <div className={"col-span-3 px-2 lg:px-0"}>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {bannerData.map((item, index) => (
                                    <div key={index} className="w-full relative h-[250px] lg:h-[350px] !flex !justify-around bg-black">
                                        <div className={"absolute p-4 lg:p-10 lg:relative top-0 left-0 w-full h-full" +
                                            " flex" +
                                            " flex-col" +
                                            " justify-center gap-y-10 items-start"}>
                                            <p className={"text-white normal-text"}>{item.name}</p>
                                            <h2 className={"text-white xl-heading-semi-bold"}>Up to {item.voucher} off</h2>
                                            <button className={"btn lg:w-1/2"}>Shop Now</button>
                                        </div>
                                        <img src={getBannerImg(item.image)} alt={item.name} className="lg:w-1/2 object-cover" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    {/*    CustomCarousel Image end*/}
                </div>
            </div>
        </div>
    );
};

export default React.memo(Banner);
