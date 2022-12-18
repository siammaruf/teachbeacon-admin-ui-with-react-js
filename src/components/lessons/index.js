import {Outlet} from "react-router-dom";
import React from "react";
import BlockSidebar from "../blocks/BlockSidebar";

const LessonIndex = () => {
    return(
        <>
            <BlockSidebar/>
            <section className="inner-main-content">
                <Outlet/>
            </section>
        </>
    )
}

export default LessonIndex;