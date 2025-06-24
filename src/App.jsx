import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router";
import Index from "./Pages/protected/Index.jsx";
import Login from "./Pages/Login.jsx";
import Loading from "./comonComponent/Loading.jsx";
import Home from "./Pages/protected/home/Home.jsx";
const App = () => {
    const Home = lazy(() => import("./Pages/protected/home/Home.jsx"));
    const Index = lazy(() => import("./Pages/protected/Index.jsx"));
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>} />
                {/* Define the protected route structure */}
                <Route element={<Suspense fallback={<Loading/>}>
                    <Index/>
                </Suspense>} >
                    <Route path="/" element={
                        <Suspense fallback={<Loading/>}>
                            <Home/>
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </>
    );
};

export default App;
