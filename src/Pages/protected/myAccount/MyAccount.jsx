import React from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import Sidebar from "./component/Sidebar.jsx";
import {Outlet} from "react-router";
import EditProfile from "./component/EditProfile.jsx";
const MyAccount = ({user}) => {
    return (
        <div className="container mx-auto px-3 lg:px-0">
            <div className={"flex items-center gap-x-5 justify-between"}><Breadcrumbs/> <p
                className={"normal-text-semi-bold"}> Welcome! <span className={"text-secondary2"}>{user?.displayName}</span></p>
            </div>
            <div className={"mt-10 lg:mt-20"}>
                <div className={"grid grid-cols-1 lg:grid-cols-4 gap-5"}>
                    <Sidebar/>
                    <div className={"lg:col-span-3"}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(MyAccount);

