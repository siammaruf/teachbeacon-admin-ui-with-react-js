import httpService from "../http-common";
import {POST_PER_PAGE} from "../../action/ActionTypes";

const getAll = (page) => {
    return httpService.get(`/ldlms/v2/sfwd-topic?page=${page}&per_page=${POST_PER_PAGE}`);
}

const get = (id) => {
    return httpService.get(`/ldlms/v2/sfwd-topic/${id}`);
}

const HttpTopicServices = {
    getAll,
    get,
}

export default HttpTopicServices;