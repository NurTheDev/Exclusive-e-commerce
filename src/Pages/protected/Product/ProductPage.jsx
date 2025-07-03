import React, {useState} from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import MenuBar from "../../../comonComponent/MenuBar.jsx";
import {useGetProductByCategoryQuery} from "../../../features/API/productAPI.js";
import ProductCard from "../../../comonComponent/ProductCard.jsx";
import NoProductsFound from "../../../helper/NoProductFound.jsx";
import ProductCardSkeleton from "../../../Skeleton/ProductSkeleton.jsx";
import Pagination from "../../../helper/Pagination.jsx";

const ProductPage = () => {
    const [categories, setCategories] = useState("");
    const [showItems, setShowItems] = useState(3);
    const {data, isLoading} = useGetProductByCategoryQuery(categories)
    const isCategoryData = !data?.products?.length
    const [page, setPage] = useState(1);
    const itemsPerPage = showItems;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data?.products?.slice(startIndex, endIndex)
    return (
        <div className={"container mx-auto"}>
            <Breadcrumbs/>
            <div className={"flex justify-end px-3 lg:px-0"}>
                <div className={"flex justify-center items-center"}><p>Show:</p>
                    <select className={"border-gray-200 ml-2 rounded-sm px-6"}
                            onClick={(e) => setShowItems(e.target.value)}>
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
            <div className={"grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5 px-3 lg:px-0"}>
                <div className={"col-span-5 lg:col-span-1"}><MenuBar onClick={setCategories} heading={"Shop By Category"}/></div>
                <div className={"col-span-4"}>
                    {
                        isLoading ? (
                            <div className={"grid grid-cols-1 lg:grid-cols-3 gap-5"}>
                                {Array.from({length: 10}).map((_, index) => (
                                    <ProductCardSkeleton key={index}/>
                                ))}
                            </div>
                        ) : (
                            isCategoryData ? <NoProductsFound/> : (
                                <div className={"grid grid-cols-1 lg:grid-cols-3 gap-5"}>
                                    {currentItems.map((product, index) => (
                                        <ProductCard key={index} product={product} discount={true}/>
                                    ))}
                                </div>)
                        )
                    }
                </div>
            </div>
            <div className={"mt-10"}>
                <Pagination setPage={setPage} page={page} totalItems={data?.products?.length}
                            itemsPerPage={itemsPerPage}/>
            </div>
        </div>
    );
};

export default React.memo(ProductPage);
