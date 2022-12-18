import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import EditComponent from "../EditComponent";
import {useDispatch, useSelector} from "react-redux";
import {retrieveSingleCourses} from "../../action/CourseAction";
import LoadingAnimation from "../LoadingAnimation";

export const EditCourse = () => {
    const course = useSelector(state => state.singleCourseReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        if (course.isLoading){
            dispatch(retrieveSingleCourses(parseInt(params.id)));
        }
    }, [dispatch,params.id,course.isLoading]);

    if (course.isLoading){
        return <LoadingAnimation/>;
    }

    return (
        <>
            <EditComponent type="course" id={params.id} item={course}/>
        </>
    )
}

export default EditCourse;