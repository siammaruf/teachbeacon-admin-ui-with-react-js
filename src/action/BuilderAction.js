import {BUILDER_CHANGE} from "./ActionTypes";

export const buildBlocks = (data) => ({
    type: BUILDER_CHANGE,
    payload: data,
})