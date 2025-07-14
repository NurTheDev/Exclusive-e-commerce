import React from 'react';
import {sidebarConfig} from "../../../../data/data.js";
import getNavlinkClass from "../../../../utils/getNavlinkClass.js";
import {NavLink} from "react-router";

const Sidebar = () => {
    return (
        <div className={"space-y-6"}>
            {sidebarConfig.sections.map((section, index) => (
                <div key={index}>
                    <p className={"normal-text-semi-bold mb-2"}>{
                        section.title
                    }</p>
                    <ul className={"space-y-2"}>
                        {section.items.map((item, index) => (
                            <li key={index} className={"ml-2"}>
                                <NavLink to={item.path} className={getNavlinkClass}>
                                    {item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {sidebarConfig.singleItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `normal-text-semibold transition-colors ${
                            isActive ? 'text-blue-600' : 'hover:text-blue-600'
                        }`
                    }
                >
                    {item.name}
                </NavLink>
            ))}
        </div>

    );
};

export default Sidebar;
