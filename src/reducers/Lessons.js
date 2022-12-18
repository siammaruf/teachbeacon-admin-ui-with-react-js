import {RETRIEVE_LESSONS} from "../action/ActionTypes";

const initState = {
    isLoading:true,
    lessons:[],
    postCount: 0
};
const LessonsReducer = (state = initState, action) => {
    const {type, payload} = action;

    switch (type) {
        case RETRIEVE_LESSONS:
            return payload;
        default:
            return {
                ...state,
                isLoading: true
            };
    }
}

export default LessonsReducer;