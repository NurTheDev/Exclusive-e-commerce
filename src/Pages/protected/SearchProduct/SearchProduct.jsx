import React, {useState} from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import SearchBar from "./SearchBar.jsx";
import {useGetProductQuery} from "../../../features/API/productAPI.js";
import ProductCard from "../../../comonComponent/ProductCard.jsx";
import ProductSkeleton from "../../../Skeleton/ProductSkeleton.jsx";

const SearchProduct = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, isLoading } = useGetProductQuery(searchTerm)
    const [showItems, setShowItems] = useState(16);
    return (
        <div className={"container mx-auto px-3 lg:px-0"}>
            <Breadcrumbs/>
            <div className={"mt-10 lg:mt-20 flex flex-col justify-center items-center"}>
                <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
                <div className={"grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10 mt-10 lg:mt-20"}>
                    {data?.products?.slice(0, showItems).map((product, index) => (
                       <>
                           {isLoading ? <ProductSkeleton/> : <ProductCard key={index} product={product}/>}
                       </>
                    ))}
                </div>
                <div>
                    {showItems < data?.products?.length && (
                        <button onClick={() => setShowItems((prevItems) => prevItems + 16)} className={"bg-secondary2" +
                            " text-white px-12 py-4 mt-10 cursor-pointer hover:bg-white hover:text-secondary2" +
                            " transition-all duration-300 hover:shadow-md border hover:border-secondary2"}>Show More</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default React.memo(SearchProduct);
