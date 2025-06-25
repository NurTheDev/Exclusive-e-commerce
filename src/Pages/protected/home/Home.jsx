import React from 'react';
import Banner from "./Banner.jsx";

const Home = () => {
    return (
        <div>
            <Banner/>
        </div>
    );
};

export default React.memo(Home) || Home;
