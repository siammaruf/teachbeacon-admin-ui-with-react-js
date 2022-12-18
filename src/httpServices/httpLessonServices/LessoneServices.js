import httpService from "../http-common";
import {POST_PER_PAGE} from "../../action/ActionTypes";

const getAll = (page) => {
    return httpService.get(`/ldlms/v2/sfwd-lessons?page=${page}&per_page=${POST_PER_PAGE}`);
}

const get = (id) => {
    return httpService.get(`/ldlms/v2/sfwd-lessons/${id}`);
}

const getPage = page => {
    return httpService.get(`/ldlms/v2/sfwd-lessons?per_page=12&${page}`);
}

const HttpLessonServices = {
    getAll,
    get,
    getPage,
}

export default HttpLessonServices;