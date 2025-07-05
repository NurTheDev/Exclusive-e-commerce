import React, {useState} from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import {useLocation} from "react-router";
import Rating from "../../../comonComponent/Rating.jsx";
import IncreamentBtn from "../../../comonComponent/IncreamentBtn.jsx";
import Button from "../../../comonComponent/Button.jsx";
import {FaRegHeart} from "react-icons/fa";
import delivery from "../../../assets/delivery.svg"
import returnImg from "../../../assets/return.svg"
const ProductDetails = () => {
    const location = useLocation()
    const product = location.state
    console.log(product)
    const [currentImage, setCurrentImage] = useState(product?.images)
    const size = ["xs", "s", "m", "l", "xl"];
    return (
        <div className={"container mx-auto  "}>
            <Breadcrumbs/>
            <div className={"grid grid-cols-2 lg:grid-cols-11 gap-5 mt-10"}>
                <div >
                    {product?.images.length !==1 ? product?.images.map((image, index) => (
                        <div key={index} className={"relative bg-secondaryColor overflow-hidden flex flex-col" +
                            " justify-center items-center mb-5 cursor-pointer"}>
                            <img src={image} alt="" className={"w-full hover:scale-105 transition-all duration-300"} onClick={() => setCurrentImage(image)}/>
                        </div>
                    )) :(
                        Array(5).fill("").map((_, index) => (
                            <div key={index} className={"relative bg-secondaryColor overflow-hidden flex flex-col" +
                                " justify-center items-center mb-5 cursor-pointer"}>
                                <img src={product?.thumbnail} alt="" className={"w-full hover:scale-105" +
                                    " transition-all duration-300"} onClick={() => setCurrentImage(product?.thumbnail)}/>
                            </div>
                        ))
                    )}
                </div>
                <div className={"lg:col-span-5"}>
                    <div className={"bg-secondaryColor overflow-hidden cursor-pointer"}><img src={currentImage || product?.images || product?.thumbnail} alt="" className={"w-full hover:scale-105 transition-all duration-300"}/></div>
                </div>
                <div className={"lg:col-span-5 px-10"}>
                    <h1 className={"medium-heading"}>{product?.title}</h1>
                    <div className={"mt-4 flex justify-start items-center gap-2 lg:gap-5 small-text text-text1"} >
                        <Rating value={product?.rating} />
                        <span className={"border-r-2 pr-2 lg:pr-5 border-text1/50 "}>({product?.reviews.length} Reviews)</span>
                        <span className={"text-button"}>{product?.availabilityStatus}</span>
                    </div>
                    <p className={"mt-4 medium-heading"}>${product?.price}</p>
                    <p className={"mt-6 small-text border-b-2 border-text1/50 pb-6"}>{product?.description}</p>
                    <div className={"flex justify-center flex-col items-start gap-10 mt-6 "}>
                       <div className={"flex justify-start items-center gap-5"}>
                           <span className={"small-heading-medium"}>Color:</span> <div className={"flex justify-start items-center" +
                           " gap-2"}>
                        <span className={"bg-black text-white py-1 rounded-full w-5 h-5 hover:scale-110" +
                            " cursor-pointer transition-all duration-300"}></span>
                           <span className={"bg-red-500 text-white px-2 py-1 rounded-full w-5 h-5 hover:scale-110" +
                               " cursor-pointer transition-all duration-300"}></span>
                           <span className={"bg-gray-500 text-white px-2 py-1 rounded-full w-5 h-5 hover:scale-110" +
                               " cursor-pointer transition-all duration-300"}></span>
                       </div>
                       </div>
                        <div className={"flex justify-start items-center gap-5"}>
                            <span className={"small-heading-medium"}>Size:</span>
                            <div className={"flex justify-start items-center gap-3"}>
                                {size.map((item, index) => (
                                    <span key={index} className={"border-2 border-black/50 px-2 py-1 rounded-sm" +
                                        " text-black" +
                                        " cursor-pointer" +
                                    " hover:bg-secondary2 hover:border-secondary2 hover:text-white transition-all" +
                                        " duration-300 w-7 h-7" +
                                        " flex" +
                                        " justify-center items-center font-semibold"}>{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className={"flex justify-start items-center gap-5"}>
                            <IncreamentBtn/>
                            <Button btnText={"Buy Now"} className={"bg-secondary2 text-white px-12"}/>
                            <span className={"text-lg cursor-pointer w-8 h-8 flex justify-center items-center" +
                                " border-black/50 border rounded-md hover:bg-secondary2 hover:text-white"}><FaRegHeart /></span>
                        </div>
                        <div className={"border border-text1 rounded-md lg:w-3/4 flex flex-col justify-center" +
                            " items-start" +
                            " p-6"}>
                            <div className={"flex justify-start items-center gap-3 border-b border-text1 w-full  pb-6"}>
                                <div><img src={delivery || "https://img.icons8.com/ios/50/000000/ship.png"} alt=""/></div>
                                <div>
                                    <h5 className={"font-medium"}>Free Delivery</h5><p className={"underline text-xs" +
                                    " font-medium"}>{product?.shippingInformation}</p>
                                </div>
                            </div>
                            <div className={"flex justify-start items-center gap-3 w-full  pt-6"}>
                                <div><img src={returnImg || "https://img.icons8.com/ios/50/000000/return.png"} alt=""/></div>
                                <div>
                                    <h5 className={"font-medium"}>Return Delivery</h5><p className={"underline text-xs" +
                                    " font-medium"}>{product?.returnPolicy}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
