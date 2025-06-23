import React from 'react';
import {Route, Routes} from "react-router";
import Index from "./Pages/protected/Index.jsx";
import Home from "./Pages/protected/home/Home.jsx";
import Login from "./Pages/Login.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>} />
                {/* Define the protected route structure */}
                <Route element={<Index/>} >
                    <Route path="/" element={<Home/>} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
