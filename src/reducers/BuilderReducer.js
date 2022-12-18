import {BUILDER_CHANGE} from "../action/ActionTypes";

const initState = [];

const builderReducer = (state = initState, action) => {
    switch (action.type){
        case BUILDER_CHANGE:
            return action.payload;

        default:
            return state;
    }
}

export default builderReducer;