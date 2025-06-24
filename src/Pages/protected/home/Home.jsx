import React from 'react';

const Home = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Welcome to the Home Page
            </h1>
            <p className="mt-4 text-lg">
                This is a protected route, accessible only after login.
            </p>
        </div>
    );
};

export default React.memo(Home) || Home;
