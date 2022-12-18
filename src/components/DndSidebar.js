import React from 'react';
import {Draggable, Droppable} from "react-beautiful-dnd";

const DndSidebar = ({lessons}) => {
    return (
        <nav>
            <Droppable droppableId="droppable1">
                {(provided, snapshot) => (

                    <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="list-unstyled dnd-lesson-list"
                    >
                        {
                            lessons.map((item, index) => {
                                return (
                                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                        {(provided) => (
                                            <li
                                                key={item.id}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="d-block"
                                            >{item.title}</li>
                                        )}
                                    </Draggable>
                                )
                            })
                        }
                        {provided.placeholder}
                    </ul>

                )}
            </Droppable>
        </nav>
    );
};

export default DndSidebar;