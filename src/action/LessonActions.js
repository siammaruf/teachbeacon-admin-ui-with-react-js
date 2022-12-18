import HttpLessonServices from "../httpServices/httpLessonServices/LessoneServices";
import {CLEAR_STATE_DATA, RETRIEVE_LESSONS, RETRIEVE_SINGLE_LESSONS} from "./ActionTypes";

export const retrieveLesson = (page) => async (dispatch) => {
    try {
        const response = await HttpLessonServices.getAll(page);

        dispatch({
            type: RETRIEVE_LESSONS,
            payload: {
                isLoading: false,
                lessons: response.data,
                postCount: response.headers["x-wp-total"],
            }
        })

    } catch (err) {
        console.log(err);
    }
}

export const retrieveSingleLesson = (id) => async (dispatch) => {
    try {
        const response = await HttpLessonServices.get(id);

        dispatch({
            type: RETRIEVE_SINGLE_LESSONS,
            payload: response.data
        })

    } catch (err) {
        console.log(err);
    }
}

export const clearStateData = (data) => {
    return{
        type: CLEAR_STATE_DATA,
    }
}