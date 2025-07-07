import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router";
import Loading from "./helper/Loading.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetails from "./Pages/protected/SingleProductDetails/ProductDetails.jsx";

const App = () => {
    const Home = lazy(() => import("./Pages/protected/home/Home.jsx"));
    const Index = lazy(() => import("./Pages/protected/Index.jsx"));
    const NotFound = lazy(() => import("./Pages/Not Found/NotFound.jsx"));
    const Product = lazy(() => import("./Pages/protected/Product/ProductPage.jsx"));
    const ProductDetails = lazy(() => import("./Pages/protected/SingleProductDetails/ProductDetails.jsx"));
    const WishList = lazy(() => import("./Pages/protected/WishList/WishList.jsx"));
    const SignUp = lazy(() => import("./Pages/authentication/SignUp.jsx"));
    const Login = lazy(() => import("./Pages/authentication/Login.jsx"));
    return (
        <>
            <Routes>
                <Route path="/login" element={<Suspense fallback={<Loading/>}>
                    <Login/>
                </Suspense>}/> <Route path="/signup" element={<Suspense fallback={<Loading/>}>
                    <SignUp/>
                </Suspense>}/>
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
                    }/> <Route path="wishlist" element={
                        <Suspense fallback={<Loading/>}>
                            <WishList/>
                        </Suspense>
                    }/>
                    <Route path={"category/:id"} element={
                        <Suspense fallback={<Loading/>}>
                            <Product/>
                        </Suspense>
                    }/>
                    <Route path={"product/:id"} element={<Suspense fallback={<Loading/>}><ProductDetails/></Suspense>}/>
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
