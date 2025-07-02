import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router";
import Login from "./Pages/Login.jsx";
import Loading from "./helper/Loading.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
    const Home = lazy(() => import("./Pages/protected/home/Home.jsx"));
    const Index = lazy(() => import("./Pages/protected/Index.jsx"));
    const NotFound = lazy(() => import("./comonComponent/NotFound.jsx"));
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>} />
                {/* Define the protected route structure */}
                <Route element={<Suspense fallback={<Loading/>}>
                    <Index/>
                </Suspense>} >
                    <Route index element={
                        <Suspense fallback={<Loading/>}>
                            <Home/>
                        </Suspense>
                    } />
                    <Route path="about" element={
                        <Suspense fallback={<Loading/>}>
                            <h1>i am about</h1>
                        </Suspense>
                    } />
                    {/* Add other protected routes here */}
                </Route>
                <Route path="*" element={
                    <Suspense fallback={<Loading/>}>
                        <NotFound/>
                    </Suspense>
                } />
            </Routes>
        </>
    );
};

export default App;
