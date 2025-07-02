import React from 'react';
import {Link, useLocation} from "react-router";

const Breadcrumbs = () => {
    const location = useLocation()
    const pathName= location.pathname.split('/').filter((x)=>x)
    if(pathName.length === 0) return null

    return (
        <div className="breadcrumbs text-sm">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                {pathName.map((path, index) => (
                    <li key={index}>
                        {index === pathName.length - 1 ? (
                            <span>{path}</span>
                        ) : (
                            <Link to={`/${path}`}>{path}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(Breadcrumbs);
