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
const About = lazy(() => import("./Pages/protected/About/About.jsx"));
const Cart = lazy(() => import("./Pages/protected/Cart/Cart.jsx"));
const Checkout = lazy(() => import("./Pages/protected/Checkout/Checkout.jsx"));
const MyAccount = lazy(() => import("./Pages/protected/myAccount/MyAccount.jsx"));
const EditProfile = lazy(() => import("./Pages/protected/myAccount/component/EditProfile.jsx"));
const AddressBook = lazy(() => import("./Pages/protected/myAccount/component/AddressBook.jsx"));
const PaymentOptions = lazy(() => import("./Pages/protected/myAccount/component/PaymentOptions.jsx"));
const App = () => {
    const { isAuthenticated, user } = useAuth();
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
                        <Route path ="/cart" element={<Cart/>} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/my-account" element={<MyAccount user={user}/>}>
                            <Route path="edit-profile" element={<EditProfile user={user}/>} />
                            <Route path="address-book" element={<AddressBook user={user}/>} />
                            <Route path="payment-options" element={<PaymentOptions user={user}/>} />
                        </Route>
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
