import React, {useState} from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import Rating from "../../../comonComponent/Rating.jsx";
import IncreamentBtn from "../../../comonComponent/IncreamentBtn.jsx";
import Button from "../../../comonComponent/Button.jsx";
import {FaRegHeart} from "react-icons/fa";
import delivery from "../../../assets/delivery.svg"
import returnImg from "../../../assets/return.svg"
import Heading from "../../../comonComponent/Heading.jsx";
import CustomCarousel from "../../../helper/CustomCarousel.jsx";
import {useGetProductQuery, useGetSingleProductQuery} from "../../../features/API/productAPI.js";
import {getSettings} from "../../../utils/index.js";
import {useParams} from "react-router";
import ProductDetailsSkeleton from "../../../Skeleton/SingleProductSkeleton.jsx";
import ErrorComponent from "../../../helper/ErrorComponent.jsx";
const ProductDetails = () => {
    const params = useParams()
    const {data: product, error: productError, isLoading: productLoading} = useGetSingleProductQuery(params.id)
    const {data, error, isLoading} = useGetProductQuery(product?.brand)
    const settings = getSettings("product");
    // const location = useLocation()
    // const product = location.state
    const [currentImage, setCurrentImage] = useState(product?.images )
    const size = ["xs", "s", "m", "l", "xl"];
    // zoom effect
    const [isZooming, setIsZooming] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
    const handleMouseMove = (e) => {
        const image = e.target;
        const { left, top, width, height } = image.getBoundingClientRect();

        const x = e.clientX - left;
        const y = e.clientY - top;

        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;

        setZoomPosition({ x: e.clientX, y: e.clientY });
        setBackgroundPosition(`${xPercent}% ${yPercent}%`);
    };

    const handleMouseEnter = () => {
        setIsZooming(true);
    };

    const handleMouseLeave = () => {
        setIsZooming(false);
    };
    return (
        <div className={"container mx-auto  "}>
            {productError ? <ErrorComponent error={productError} title={"Failed to load product details"}/> : <>
                <Breadcrumbs/>
                {productLoading ? <ProductDetailsSkeleton/> : <div className={"grid grid-cols-2 lg:grid-cols-11 gap-5 mt-10"}>
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
                        <div className={"bg-secondaryColor overflow-hidden cursor-pointer"}>
                            <img
                                onMouseMove={(e)=> handleMouseMove(e)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                src={currentImage || product?.images || product?.thumbnail}
                                alt=""
                                className={`w-full hover:scale-105 transition-all duration-300 ${isZooming ? 'cursor-zoom-in blur-xs' : ''}`}
                            />
                            {/*You can do this same thing with npm react inner-image zoom*/}
                            {isZooming && (
                                <div
                                    className="zoom-preview"
                                    style={{
                                        position: 'fixed',
                                        left: zoomPosition.x - 50,
                                        top: zoomPosition.y - 50,
                                        width: '150px',
                                        height: '150px',
                                        backgroundImage: `url(${currentImage || product?.images || product?.thumbnail})`,
                                        backgroundSize: '1000% 1000%',
                                        backgroundPosition: backgroundPosition,
                                        border: '2px solid #ccc',
                                        borderRadius: '8px',
                                        pointerEvents: 'none',
                                        zIndex: 1000,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                                    }}
                                />
                            )}
                        </div>
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
                                        <span key={index} className={"border border-black/50 px-2 py-1 rounded-sm" +
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
                </div> }
                <div className={"mt-10 lg:mt-16"}>
                    <Heading title={"Related Item"}/>
                    <div>
                        <CustomCarousel type={"product"} data={data?.products || []} error ={error} settings={settings} loading={isLoading}/>
                    </div>
                </div>
            </>}
        </div>
    );
};

export default React.memo(ProductDetails);
