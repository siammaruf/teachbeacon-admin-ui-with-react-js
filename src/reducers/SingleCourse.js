import {
    BLOCK_CHANGE,
    BUILDER_CHANGE,
    CLEAR_STATE_DATA,
    DND_CHANGE,
    RETRIEVE_SINGLE_COURSES
} from "../action/ActionTypes";

const initState = {
    isLoading: true,
};
const singleCourseReducer = (state = initState, action) => {
    const {type, payload} = action;

    switch (type) {
        case RETRIEVE_SINGLE_COURSES:
            return {isLoading: false, ...payload};
        case BUILDER_CHANGE:
            return {...state, isLoading: false};
        case BLOCK_CHANGE:
            return {...state, isLoading: false};
        case DND_CHANGE:
            return {...state, isLoading: false};
        case CLEAR_STATE_DATA:
            return {...state,isLoading: true};
        default:
            return {...state, isLoading: true};
    }
}

export default singleCourseReducer;