import axios from 'axios';
import * as actions from './actions';

export const getAllVideos = () => {
    return async dispatch => {
        dispatch({
            type: actions.TOGGLE_CONTENT_SPINNER,
            value: true
        });

        const res = await axios.get("/videos");
        const videos = res.data;
        dispatch({
            type: actions.GET_ALL_VIDEOS,
            videos
        });
        console.log(videos);

        dispatch({
            type: actions.TOGGLE_CONTENT_SPINNER,
            value: false
        });
    }
}


export const getVideo = _id => {
    return async dispatch => {
        dispatch({
            type: actions.TOGGLE_CONTENT_SPINNER,
            value: true
        });

        const res = await axios.get(`/videos/${_id}`);
        const video = res.data;
        console.log(video);
        dispatch({
            type: actions.GET_VIDEO,
            video
        });

        dispatch({
            type: actions.TOGGLE_CONTENT_SPINNER,
            value: false
        });
    }
}


export const getUser = _id => {
    return async dispatch => {
        dispatch({
            type: actions.TOGGLE_CONTENT_SPINNER,
            value: true
        });

        const res = await axios.get(`/user/${_id}`);
        const user = res.data;
        console.log(user);
        dispatch({
            type: actions.GET_USER,
            user
        });

        dispatch({
            type: actions.TOGGLE_CONTENT_SPINNER,
            value: false
        });
    }
}


export const getSearchVideos = (search) => {
    return async dispatch => {
        dispatch({
            type: actions.TOGGLE_CONTENT_SPINNER,
            value: true
        });

        const res = await axios.get(`/videos/search?search=${search}`);
        const videos = res.data;
        console.log(videos);
        dispatch({
            type: actions.GET_SEARCH_VIDEOS,
            videos
        });

        dispatch({
            type: actions.TOGGLE_CONTENT_SPINNER,
            value: false
        });
    }
}