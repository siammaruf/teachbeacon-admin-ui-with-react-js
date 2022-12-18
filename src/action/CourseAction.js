import {
    RETRIEVE_COURSES,
    RETRIEVE_SINGLE_COURSES
} from "./ActionTypes";
import HttpCourseServices from "../httpServices/httpCourseServices/CourseServices";

export const retrieveCourses = (page) => async (dispatch) => {
    try {
        const response = await HttpCourseServices.getAll(page);

        dispatch({
            type: RETRIEVE_COURSES,
            payload: {
                isLoading: false,
                courses: response.data,
                postCount: response.headers["x-wp-total"],
            }
        })
    }catch (err) {
        console.log(err);
    }
}

export const retrieveSingleCourses = (id) => async (dispatch) => {
    try {
        const response = await HttpCourseServices.get(id);

        dispatch({
            type: RETRIEVE_SINGLE_COURSES,
            payload: response.data,
        })

    }catch (err) {
        console.log(err);
    }
}