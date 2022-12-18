import HttpTopicServices from "../httpServices/httpTopicService/TopicServices";
import {CLEAR_TOPIC_DATA, RETRIEVE_SINGLE_TOPIC, RETRIEVE_TOPIC} from "./ActionTypes";

export const dndTopicAction = (data) => ({
    type: "DND_TOPIC",
    payload: data
});

export const retrieveTopic = (page) => async (dispatch) => {
    try {
        const response = await HttpTopicServices.getAll(page);

        dispatch({
            type: RETRIEVE_TOPIC,
            payload: {
                isLoading: false,
                topics: response.data,
                postCount: response.headers["x-wp-total"],
            }
        });
        
    }catch (e) {
        console.log(e);
    }
}

export const retrieveSingleTopic = (id) => async (dispatch) => {
    try {
        const response = await HttpTopicServices.get(id);

        dispatch({
            type: RETRIEVE_SINGLE_TOPIC,
            payload: response.data,
        });

    }catch (e) {
        console.log(e);
    }
}

export const clearTopicData = () => {
    return{
        type: CLEAR_TOPIC_DATA
    }
}