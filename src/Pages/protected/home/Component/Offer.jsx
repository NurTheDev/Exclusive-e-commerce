import React from 'react';
import Slider from "react-slick";
import Timer from "../../../../helper/Timer.jsx";
import Button from "../../../../comonComponent/Button.jsx";
import ErrorComponent from "../../../../helper/ErrorComponent.jsx";
import {useGetProductQuery} from "../../../../features/API/productAPI.js";
import {getSettings} from "../../../../utils/index.js";
import {useNavigate} from "react-router";

const Offer = () => {
    const settings = getSettings("offer")
    const navigate = useNavigate()
    const handleBuyNow=(product)=>{
        navigate(`/product/${product.id}`);
    }
    const { data, error } = useGetProductQuery()
   if(error){
       return <ErrorComponent error={error} title="Failed to load offers" />
   }
   else {
       return (
           <div className={"container mx-auto"}>
               <div className={"px-2 lg:px-0"}>
                   <div className="slider-container">
                       <Slider {...settings}>
                           {data?.products.map((item, index) => (
                               <div key={index}
                                    className="w-full relative h-[350px] lg:h-[550px] !flex !justify-around bg-black">
                                   <div className={"absolute p-4 lg:p-10 lg:relative top-0 left-0 lg:w-1/2 h-full" +
                                       " flex" +
                                       " flex-col" +
                                       " justify-center gap-y-10 items-start"}>
                                       <p className={"text-button normal-text-semi-bold"}>Categories</p>
                                       <h2 className={"text-white xl-heading-semi-bold"}>{item.title}</h2>
                                       <Timer className={"text-white"} active={true} time={Math.round(item.rating)}/>
                                       <Button onClick={()=> handleBuyNow(item)} btnText={"Buy Now"} className={"bg-button" +
                                           " text-white" +
                                           " px-12 mt-10"}/>
                                   </div>
                                   <div className={"lg:w-2/3 h-full flex items-center imageDropShadow"}>
                                       <img src={item.images} alt={item.name} className="w-full object-fit h-full "/>
                                   </div>
                               </div>
                           ))}
                       </Slider>
                   </div>
               </div>
           </div>
       );
   }
};

export default Offer;
