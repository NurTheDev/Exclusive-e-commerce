import React from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import Button from "../../../comonComponent/Button.jsx";
import {useGetProductQuery} from "../../../features/API/productAPI.js";
import ProductCard from "../../../comonComponent/ProductCard.jsx";
import useGetProduct from "../../../hooks/useGetProduct.js";
import CustomCarousel from "../../../helper/CustomCarousel.jsx";
import {getSettings} from "../../../utils/index.js";
import Heading from "../../../comonComponent/Heading.jsx";

const WishList = () => {
    const settings = getSettings("product");
    const {data} = useGetProductQuery()
    const {product, loading} = useGetProduct("wishList")
    const [showItems, setShowItems] = React.useState(4);
    // Don't render CustomCarousel until data is loaded
    const wishlistProducts = Array.isArray(product) ? product :
        (product && typeof product === 'object') ? Object.values(product) : [];
    const handleShowMore = () => {
        setShowItems((prevItems) => prevItems + 4);
        console.log(showItems)
    };
    console.log(wishlistProducts)
    return (
        <div className={"container mx-auto p-6"}>
            <Breadcrumbs/>
            <div className={"flex justify-between items-center mt-6"}>
                <h3 className={"small-heading-medium"}>Wishlist ({wishlistProducts.length})</h3>
                <Button btnText={"Move All To Bag"} className={"px-12 bg-transparent border border-black"}/>
            </div>
            {
                !loading && product && (
                    <div className={"mt-10 flex flex-col justify-center items-center"}>
                        <div className={"grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10"}>
                            {wishlistProducts.slice(0, showItems).map((product) => (
                                <ProductCard key={product.id} product={product} discount={true} wishItem={true}/>
                            ))}
                        </div>
                        {
                            showItems < wishlistProducts.length && (
                                <button onClick={handleShowMore} className={"bg-secondary2 text-white px-12 py-4 mt-10"}>Show More</button>
                            )}
                    </div>
                )
            }
           <div className={"mt-10 lg:mt-20"}>
               <Heading title={"You May Also Like"}/>
               <div className={"grid grid-cols-2 lg:grid-cols-4 gap-5 "}>
                   {data?.products.slice(0, 4).map((product) => (
                       <div key={product.id}>
                           <ProductCard product={product} discount={true} />
                       </div>
                   ))}
               </div>
           </div>
        </div>
    );
};

export default WishList;
