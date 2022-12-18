import React from 'react';
import {Outlet} from "react-router-dom";
import BlockSidebar from "../blocks/BlockSidebar";

const CoursesIndex = () => {
    return (
        <>
            <BlockSidebar/>
            <section className="inner-main-content">
                <Outlet/>
            </section>
        </>
    );
};

export default CoursesIndex;