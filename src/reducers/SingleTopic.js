import {BLOCK_CHANGE, BUILDER_CHANGE, CLEAR_STATE_DATA, DND_CHANGE, RETRIEVE_SINGLE_TOPIC} from "../action/ActionTypes";

const initState = {
    isLoading:true
}

const singleTopicReducer = (state = initState, action ) => {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_SINGLE_TOPIC:
            return {isLoading: false,...payload};
        case BUILDER_CHANGE:
            return {...state,isLoading: false};
        case BLOCK_CHANGE:
            return {...state, isLoading: false};
        case DND_CHANGE:
            return {...state,isLoading: false};
        case CLEAR_STATE_DATA:
            return {...state,isLoading: true};
        default:
            return state;
    }
}

export default singleTopicReducer;