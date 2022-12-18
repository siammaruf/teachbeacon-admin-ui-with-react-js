import {BLOCK_CHANGE} from "./ActionTypes";

const initBlocks = [
    {id: 1, type: 'text', variant: 'paragraph', title: 'paragraph'},
    {id: 2, type: 'text', variant: 'paragraphHeading', title: 'paragraph with heading'},
    {id: 3, type: 'text', variant: 'paragraphSubHeading', title: 'paragraph with sub heading'},
    {id: 4, type: 'text', variant: 'heading', title: 'heading'},

    {id: 5, type: 'image', variant: 'imageCenter', title: 'image centered'},
    {id: 6, type: 'image', variant: 'imageFullWidth', title: 'Image full width'},
    {id: 7, type: 'image', variant: 'imageText', title: 'image & text'},
    {id: 8, type: 'image', variant: 'textOnImage', title: 'text on image'},

    {id: 9, type: 'list', variant: 'numberList', title: 'number list'},
    {id: 10, type: 'list', variant: 'checkboxList', title: 'checkbox list'},
    {id: 11, type: 'list', variant: 'bulletedList', title: 'bulleted list'},

    {id: 12, type: 'multimedia', variant: 'audio', title: 'audio'},
    {id: 13, type: 'multimedia', variant: 'video', title: 'video'},
    {id: 14, type: 'multimedia', variant: 'embed', title: 'embed'},

    {id: 15, type: 'interactive', variant: 'labeledGraphic', title: 'Labeled Graphic'},
    {id: 16, type: 'interactive', variant: 'process', title: 'process'},
    {id: 17, type: 'interactive', variant: 'embed', title: 'embed'},

    {id: 18, type: 'quote', variant: 'quoteA', title: 'quote a'},
    {id: 19, type: 'quote', variant: 'quoteB', title: 'quote b'},
    {id: 20, type: 'quote', variant: 'quoteC', title: 'quote c'},
    {id: 21, type: 'quote', variant: 'quoteD', title: 'quote d'},

    {id: 22, type: 'knowledgeCheck', variant: 'multipleChoice', title: 'multiple choice'},
    {id: 23, type: 'knowledgeCheck', variant: 'multipleResponse', title: 'multiple response'},
    {id: 24, type: 'knowledgeCheck', variant: 'FillInTheBlank', title: 'Fill in the blank'},

    {id: 25, type: 'divider', variant: 'divider', title: 'divider'},
    {id: 26, type: 'divider', variant: 'numberDivider', title: 'number divider'},
    {id: 27, type: 'divider', variant: 'spacer', title: 'Spacer'}
];

export const blockTitleList = [
    {title: 'Text', target: 'text'},
    {title: 'List', target: 'list'},
    {title: 'Image', target: 'image'},
    {title: 'Gallery', target: 'gallery'},
    {title: 'Multimedia', target: 'multimedia'},
    {title: 'Interactive', target: 'interactive'},
    {title: 'Chart', target: 'chart'},
    {title: 'Divider', target: 'divider'},
];

export const blockAction = (data) => ({
    type: BLOCK_CHANGE,
    payload: data
});

export const closeSidebar = (subMenuRef, innerSidebar) => {
    const allBlcTitle = document.querySelectorAll('.item-blc-title');
    const mainSidebar = document.getElementById("main-sidebar");
    subMenuRef.current.style.display = 'none';
    innerSidebar.current.classList.add("hide-navbar");
    mainSidebar.classList.remove("hide-navbar");
    allBlcTitle.forEach(element => {
        element.classList.remove('active');
    });
}

export const blockTitleFunc = (event, subMenuRef, target, dispatch, action) => {
    const allBlcTitle = document.querySelectorAll('.item-blc-title');
    let handler = event.currentTarget;

    if (handler.classList.contains('active')) {
        handler.classList.remove('active');
        subMenuRef.current.style.display = 'none';
    } else {
        allBlcTitle.forEach(element => {
            element.classList.remove('active');
        });
        handler.classList.add('active');
        subMenuRef.current.style.display = 'block';
    }

    const filterBlocks = initBlocks.filter(item => item.type === target);
    dispatch(action(filterBlocks));
}

export const addBlocks = (dispatch, action, blocks, item) => {
    dispatch(action([...blocks,item]))
}