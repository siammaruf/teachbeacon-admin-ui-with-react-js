import {DND_CHANGE} from "../action/ActionTypes";

const initState = {
    lessons: [
        {id: 0, title: 'Lesson 1'},
        {id: 1, title: 'Lesson 2'},
        {id: 2, title: 'Lesson 3'},
        {id: 3, title: 'Lesson 4'},
        {id: 4, title: 'Lesson 5'},
        {id: 5, title: 'Lesson 6'},
    ],
    selectedLessons:[]
};

const dndReducer = (state = initState, action) => {
    switch (action.type) {
        case DND_CHANGE:
            return action.payload;
        default:
            return state;
    }
}

export default dndReducer;