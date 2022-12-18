import React from 'react';
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import ParagraphHeading from "./ParagraphHeading";

const TextIndex = () => {
    return (
        <div className="text-blocks-holder">
            <Heading/>
            <Paragraph/>
            <ParagraphHeading/>
        </div>
    );
};

export default TextIndex;