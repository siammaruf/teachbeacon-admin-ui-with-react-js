import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import EditComponent from "../EditComponent";
import {useDispatch, useSelector} from "react-redux";
import {retrieveSingleTopic} from "../../action/TopicActions";
import LoadingAnimation from "../LoadingAnimation";

const EditTopic = () => {
    const topic = useSelector(state => state.singleTopicReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        if (topic.isLoading){
            dispatch(retrieveSingleTopic(parseInt(params.id)))
        }
    }, [dispatch,params.id,topic.isLoading]);

    if (topic.isLoading){
        return <LoadingAnimation/>;
    }

    return (
        <>
            <EditComponent type="topic" id={params.id} item={topic}/>
        </>
    )
};

export default EditTopic;