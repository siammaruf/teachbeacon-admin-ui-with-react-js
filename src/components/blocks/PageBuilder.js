import React from 'react';
import {Button} from "react-bootstrap";
import Blocks from "./Blocks";

const PageBuilder = ({blocks, showBlocks}) => {
    return (
        <div className="page-builder-holder">
            <div className="page-builder-area">
                {blocks &&
                    blocks.map((block)=>{
                        return(
                            <div key={block.id} className="builder-block">
                                <Blocks item={block}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="block-show-btn-area">
                <div className="block-show-btn-holder d-flex justify-content-center w-100">
                    <Button onClick={showBlocks}>+</Button>
                </div>
            </div>
        </div>
    );
};

export default PageBuilder;