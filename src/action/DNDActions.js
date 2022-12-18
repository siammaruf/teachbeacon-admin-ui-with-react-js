import {DND_CHANGE} from "./ActionTypes";

export const dndLessonsAction = (data) =>({
    type:DND_CHANGE,
    payload:data
})