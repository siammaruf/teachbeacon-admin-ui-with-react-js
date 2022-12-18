import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    closeSidebar,
    dndDeleteSelectedItem,
    dndMove,
    getList,
    hideMainSidebar,
    reorder,
    shoeDndSidebar
} from "../action/NewCourseActions";
import {dndLessonsAction} from "../action/DNDActions";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {Badge, Form} from "react-bootstrap";
import RichTextEditor from "./RichTextEditor";
import {AiFillCloseCircle} from "react-icons/ai";
import PageBuilder from "./blocks/PageBuilder";
import {BsX} from "react-icons/bs";
import DndSidebar from "./DndSidebar";
import {dndTopicAction} from "../action/TopicActions";

const SaveComponent = ({type}) => {
    const dispatch = useDispatch();
    const dndSidebarRef = useRef(null);

    const builderBlocks = useSelector(state => state.builderReducer);

    const dndLessonState = useSelector(state => state.dndReducer);
    const dndTopicState = useSelector(state => state.dndTopicReducer);

    const dndLessons = type === 'lesson' ? dndTopicState : dndLessonState;

    const selectedLessons = dndLessons.selectedLessons || [];

    const [value, setValue] = useState('');
    const editorConfig = {};

    const showBuilderBar = () => {
        hideMainSidebar(dndSidebarRef)
    }

    const onDragEnd = (result) => {
        const {source, destination} = result;

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {

            const lessons = reorder(
                getList(source.droppableId, dndLessons),
                source.index,
                destination.index
            );

            let state = {lessons};

            if (source.droppableId === 'droppable') {
                state = {
                    lessons: dndLessons.lessons,
                    selectedLessons: lessons,
                };

                if (type === 'lesson'){
                    dispatch(dndTopicAction(state));
                }else {
                    dispatch(dndLessonsAction(state));
                }
            }
        } else {

            const result = dndMove(
                getList(source.droppableId, dndLessons),
                getList(destination.droppableId, dndLessons),
                source,
                destination
            );

            const dndResult = {
                lessons: result.droppable1,
                selectedLessons: result.droppable,
            }

            if (type === 'lesson'){
                dispatch(dndTopicAction(dndResult));
            }else {
                dispatch(dndLessonsAction(dndResult));
            }
        }
    }

    const dndDeleteSelected = (id) => {
        const lessonObj = dndDeleteSelectedItem(id, dndLessons);

        if (type === 'lesson'){
            dispatch(dndTopicAction(lessonObj));
        }else {
            dispatch(dndLessonsAction(lessonObj));
        }
    }

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>

                <div className="page-content-holder">
                    <header className="page-title-area mt-4 mb-3 d-lg-flex d-sm-block">
                        <h1 className="mb-0 mr-10">Add New {type}</h1>
                    </header>
                    <section className="page-content">
                        <Form className="mb-4">
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label className="text-capitalize">{type} Title</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group controlId="formContent">
                                <Form.Label className="text-capitalize">{type} Content</Form.Label>
                                <RichTextEditor setValue={setValue} config={editorConfig}/>
                            </Form.Group>
                        </Form>

                        {type !== 'topic' &&
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        onClick={() => {
                                            shoeDndSidebar(dndSidebarRef)
                                        }}
                                        {...provided.droppableProps}
                                        className="lesson-wrap-drop-board p-2">

                                        {selectedLessons.length === 0 && (
                                            <div
                                                className="board-title d-flex align-items-center justify-content-center h-100 w-100">
                                                <span>Click here for Drag and drop {type === "lesson" ? "topic": "lesson"} from the sidebar</span>
                                            </div>
                                        )}

                                        {
                                            selectedLessons.map((item, index) => {
                                                return (
                                                    <Draggable key={item.id} draggableId={item.id.toString()}
                                                               index={index}>
                                                        {(provided) => (
                                                            <Badge
                                                                ref={provided.innerRef}
                                                                key={item.id}
                                                                bg="secondary"
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                className="m-1 select-lesson-item"
                                                                pill
                                                            >
                                                            <span
                                                                className="d-inline-block badge-title">{item.title}</span>
                                                                <AiFillCloseCircle onClick={() => {
                                                                    dndDeleteSelected(item.id);
                                                                }} className="ml-5 badge-close-btn" size={20}/>
                                                            </Badge>
                                                        )}
                                                    </Draggable>
                                                )
                                            })}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        }
                        <PageBuilder blocks={builderBlocks} showBlocks={showBuilderBar}/>
                    </section>
                </div>
                {type !== 'topic' &&
                    <div ref={dndSidebarRef} className="dnd-sidebar hide-navbar">
                        <div className="d-flex justify-content-between p-3">
                            <span>Select Lesson</span>
                            <div className="close-btn" onClick={() => {
                                closeSidebar(dndSidebarRef)
                            }}>
                                <BsX size={25}/>
                            </div>
                        </div>
                        <DndSidebar lessons={dndLessons.lessons}/>
                    </div>
                }
            </DragDropContext>
        </>
    );
};

export default SaveComponent;