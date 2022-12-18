import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import EditComponent from "../EditComponent";
import {useDispatch, useSelector} from "react-redux";
import {retrieveSingleLesson} from "../../action/LessonActions";
import LoadingAnimation from "../LoadingAnimation";

const EditLesson = () => {
    const lesson = useSelector(state => state.singleLessonReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        if (lesson.isLoading){
            dispatch(retrieveSingleLesson(parseInt(params.id)))
        }
    }, [dispatch,params.id,lesson.isLoading]);

    if (lesson.isLoading){
        return <LoadingAnimation/>;
    }

    console.log(lesson)

    return (
        <>
            <EditComponent type="lesson" id={params.id} item={lesson}/>
        </>
    )
};

export default EditLesson;