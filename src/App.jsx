import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router";
import Login from "./Pages/Login.jsx";
import Loading from "./helper/Loading.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumbs from "./comonComponent/Breadcrumbs.jsx";

const App = () => {
    const Home = lazy(() => import("./Pages/protected/home/Home.jsx"));
    const Index = lazy(() => import("./Pages/protected/Index.jsx"));
    const NotFound = lazy(() => import("./Pages/Not Found/NotFound.jsx"));
    const Product = lazy(() => import("./Pages/protected/Product/ProductPage.jsx"));
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                {/* Define the protected route structure */}
                <Route element={<Suspense fallback={<Loading/>}>
                    <Index/>
                </Suspense>}>
                    <Route index element={
                        <Suspense fallback={<Loading/>}>
                            <Home/>
                        </Suspense>
                    }/>
                    <Route path="about" element={
                        <Suspense fallback={<Loading/>}>
                            <h1>about</h1>
                        </Suspense>
                    }/>
                    <Route path="contact" element={
                        <Suspense fallback={<Loading/>}>
                            <h1>contact</h1>
                        </Suspense>
                    }/>
                    <Route path={"category/:id"} element={
                        <Suspense fallback={<Loading/>}>
                            <Product/>
                        </Suspense>
                    }/>
                    {/* Add other protected routes here */}
                </Route>
                <Route path="*" element={
                    <Suspense fallback={<Loading/>}>
                        <NotFound/>
                    </Suspense>
                }/>
            </Routes>
        </>
    );
};

export default App;
