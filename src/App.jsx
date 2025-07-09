import React, { lazy, Suspense } from 'react';
import {Navigate, Route, Routes} from "react-router";
import Loading from "./helper/Loading.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuth } from "./hooks/useAuth.js";

// Lazy-loaded components
const Home = lazy(() => import("./Pages/protected/home/Home.jsx"));
const Index = lazy(() => import("./Pages/protected/Index.jsx"));
const NotFound = lazy(() => import("./Pages/Not Found/NotFound.jsx"));
const Product = lazy(() => import("./Pages/protected/Product/ProductPage.jsx"));
const ProductDetails = lazy(() => import("./Pages/protected/SingleProductDetails/ProductDetails.jsx"));
const WishList = lazy(() => import("./Pages/protected/WishList/WishList.jsx"));
const SignUp = lazy(() => import("./Pages/authentication/SignUp.jsx"));
const Login = lazy(() => import("./Pages/authentication/Login.jsx"));
const LoginRequired = lazy(() => import("./Pages/Not Found/LoginRequird.jsx"));
const About = lazy(() => import("./Pages/protected/About.jsx"));
const App = () => {
    const { isAuthenticated } = useAuth();
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {!isAuthenticated ? (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="*" element={<LoginRequired/>} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<Navigate to="/" replace />} />
                        <Route path="/signup" element={<Navigate to="/" replace />} />
                    <Route element={<Index />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About/>} />
                        <Route path="contact" element={<h1>contact</h1>} />
                        <Route path="wishlist" element={<WishList />} />
                        <Route path="category/:id" element={<Product />} />
                        <Route path="product/:id" element={<ProductDetails />} />
                        {/* Add more protected routes here */}
                    </Route>
                        <Route path="*" element={<NotFound />} />
                    </>
                )}
            </Routes>
        </Suspense>
    );
};

export default App;
