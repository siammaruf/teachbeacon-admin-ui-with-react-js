import {BLOCK_CHANGE} from "../action/ActionTypes";

const initState = [];

const blockReducer = (state = initState,action) => {
    switch (action.type) {
        case BLOCK_CHANGE:
            return action.payload;
        default:
            return state;
    }
}

export default blockReducer;