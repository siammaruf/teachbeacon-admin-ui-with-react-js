import React, {useRef} from 'react';
import {BsX} from "react-icons/bs";
import {Navbar} from "react-bootstrap";
import {blockTitleFunc, blockTitleList, closeSidebar, blockAction, addBlocks} from "../../action/BlockActions";
import {useDispatch, useSelector} from "react-redux";
import Blocks from "./Blocks";
import {buildBlocks} from "../../action/BuilderAction";

const BlockSidebar = () => {
    const builderState = useSelector(state => state.builderReducer);
    const blockState = useSelector(state => state.blockReducer);
    const dispatch = useDispatch();
    const subMenuRef = useRef(null);
    const innerSidebar = useRef(null);

    return (
        <>
            <aside ref={innerSidebar} id="inner-sidebar" className="inner-sidebar hide-navbar">
                <div className="d-flex justify-content-between p-3">
                    <span>Blocks Library</span>
                    <div className="close-btn" onClick={() => {
                        closeSidebar(subMenuRef, innerSidebar);
                    }}>
                        <BsX size={25}/>
                    </div>
                </div>
                <Navbar className="block-title-nav">
                    <ul className="list-unstyled">
                        {
                            blockTitleList.map((item, index) => {
                                return (
                                    <li className="item-blc-title" onClick={(event) => {
                                        blockTitleFunc(event, subMenuRef, item.target, dispatch, blockAction);
                                    }} key={index}>{item.title}</li>
                                )
                            })
                        }
                    </ul>
                </Navbar>
            </aside>
            <section ref={subMenuRef} className="inner-sub-menu-area">
                <ul className="block-sub-nav list-unstyled">
                    {blockState &&
                        blockState.map((item, index) => {
                            return (
                                <li onClick={() => {
                                    addBlocks(dispatch, buildBlocks, builderState, item)
                                }} key={item.id}>
                                    <Blocks item={item}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    );
};

export default BlockSidebar;