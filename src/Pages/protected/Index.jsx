import React from 'react';
import {Outlet} from "react-router";
import Navbar from "../../comonComponent/Navbar.jsx";
import Footer from "../../comonComponent/Footer.jsx";

const Index = () => {
    return (
        <div>
            <Navbar/>
            {<Outlet/>}
            <Footer/>
        </div>
    );
};

export default React.memo(Index) || Index;
