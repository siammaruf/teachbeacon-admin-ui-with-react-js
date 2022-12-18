import {RETRIEVE_COURSES} from "../action/ActionTypes";

const initState = {
    isLoading: true,
    courses: [],
    postCount:0,
};
const courseReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type){
        case RETRIEVE_COURSES:
            return payload;
        default:
            return {
                ...state,
                isLoading: true
            };
    }
}

export default courseReducer;