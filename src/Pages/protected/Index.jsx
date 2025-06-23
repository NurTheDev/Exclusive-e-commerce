import React from 'react';
import {Outlet} from "react-router";
import Navbar from "../../comonComponent/Navbar.jsx";

const Index = () => {
    return (
        <div>
            <Navbar/>
            {<Outlet/>}
        </div>
    );
};

export default Index;
