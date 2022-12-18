import {CLEAR_TOPIC_DATA, RETRIEVE_TOPIC} from "../action/ActionTypes";

const initState = {
    isLoading : true,
    topics : [],
    postCount: 0,
};

const TopicsReducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_TOPIC:
            return payload;
        case CLEAR_TOPIC_DATA:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {
                ...state,
                isLoading: true,
            };
    }
}

export default TopicsReducer;