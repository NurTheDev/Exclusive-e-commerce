import React, {useEffect, useState} from 'react';
import {MdArrowForwardIos} from "react-icons/md";
import {useGetProductCategoriesListQuery} from "../features/API/productAPI.js";
import {Link} from "react-router";
import MenuBarSkeleton from "../Skeleton/MenuBarSkeleton.jsx";

const MenuBar = (props) => {
    const {data, isLoading} = useGetProductCategoriesListQuery()
    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        let subscribe = false;
        if (data && !subscribe) {
            setDataList(data.slice(0, 10));
        }
        return () => {
            subscribe = true; // Cleanup function to avoid memory leaks
        }
    }, [data]);
    const handleLoadMore = () => {
        if (dataList.length < data?.length) {
            setDataList(data?.slice(0, dataList.length + 10));
        }
    }
    return (
        <>
            {isLoading ? (<MenuBarSkeleton/>) :(<div>
                {props.heading && <h3 className={"small-heading-semi-bold"}> {props.heading}</h3>}
                <ul className={"menu w-full font-poppins lg:border-r lg:border-black/30"}>
                    {dataList?.map((item, index) => (
                        <li key={index}>
                            <Link onClick={()=> props.onClick(item)}
                                  to={`/category/${item}`}
                                  className="w-full flex items-center justify-between text-left font-medium p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 capitalize"
                            >
                                {item}
                                <MdArrowForwardIos
                                    className={`w-4 h-4 transition-transform duration-200`}
                                />
                            </Link>
                        </li>
                    ))}
                    {dataList.length < data?.length && (
                        <li>
                            <button
                                className="w-full flex items-center justify-between bg-secondary2 text-white text-left font-medium p-3 hover:bg-gray-100 hover:text-black rounded-lg transition-colors duration-200"
                                onClick={handleLoadMore}
                            >
                                <span className={"capitalize"}>More Categories</span>
                                <MdArrowForwardIos
                                    className={`w-4 h-4 transition-transform duration-200`}
                                />
                            </button>
                        </li>
                    )
                    }
                </ul>
            </div>)}

        </>
    );
};

export default React.memo(MenuBar);
