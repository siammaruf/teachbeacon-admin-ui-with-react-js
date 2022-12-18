import React from 'react';
import BlockSidebar from "../blocks/BlockSidebar";
import {Outlet} from "react-router-dom";

const TopicIndex = () => {
    return (
        <>
            <BlockSidebar/>
            <section className="inner-main-content">
                <Outlet/>
            </section>
        </>
    );
};

export default TopicIndex;