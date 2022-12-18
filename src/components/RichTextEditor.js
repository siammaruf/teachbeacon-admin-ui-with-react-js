import React, {useRef} from 'react';
import JoditEditor from "jodit-react";

const RichTextEditor = ({setValue, config}) => {
    const editor = useRef(null);
    return (
        <JoditEditor
            ref={editor}
            onChange={(content)=>setValue(content)}
            config={config}
        />
    );
};

export default RichTextEditor;