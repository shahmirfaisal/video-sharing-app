import axios from "axios";
import * as actions from "./actions";

export const getAllVideos = () => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: true,
    });

    const res = await axios.get("/videos");
    const videos = res.data;
    dispatch({
      type: actions.GET_ALL_VIDEOS,
      videos,
    });
    console.log(videos);

    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: false,
    });
  };
};

export const getVideo = (_id) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: true,
    });

    const res = await axios.get(`/videos/${_id}`);
    const video = res.data;
    console.log(video);
    dispatch({
      type: actions.GET_VIDEO,
      video,
    });

    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: false,
    });
  };
};

export const getUser = (_id) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: true,
    });

    const res = await axios.get(`/user/${_id}`);
    const user = res.data;
    console.log(user);
    dispatch({
      type: actions.GET_USER,
      user,
    });

    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: false,
    });
  };
};

export const getSearchVideos = (search) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: true,
    });

    try {
      const res = await axios.get(`/videos/search?search=${search}`);
      const videos = res.data;
      console.log(videos);
      dispatch({
        type: actions.GET_SEARCH_VIDEOS,
        videos,
      });
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: false,
    });
  };
};

export const signup = (name, email, password, history) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: true,
    });

    try {
      const res = await axios.post("/user/signup", {
        name,
        email,
        password,
      });
      const data = res.data;
      console.log(data);
      dispatch({
        type: actions.LOGIN,
        user: data.user,
        token: data.token,
      });
      localStorage.setItem("token", data.token);
      history.push("/");
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: actions.ADD_AUTH_ERROR,
        error: error.response.data.message,
      });
    }

    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: false,
    });
  };
};


export const login = (email, password, history) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: true,
    });

    try {
      const res = await axios.post("/user/login", {
        email,
        password,
      });
      const data = res.data;
      console.log(data);
      dispatch({
        type: actions.LOGIN,
        user: data.user,
        token: data.token,
      });
      localStorage.setItem("token", data.token);
      history.push("/");
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: actions.ADD_AUTH_ERROR,
        error: error.response.data.message,
      });
    }

    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: false,
    });
  };
};


export const isLogin = () => {
  return async dispatch => {
    const token = localStorage.getItem("token");
    if (!token) return;

    dispatch({
      type: actions.TOGGLE_FULL_SCREEN_SPINNER,
      value: true
    });

    try {
      const res = await axios.get("/user/isLogin", {
        headers: {
          Authorization: token
        }
      });
      const data = res.data;
      console.log(data);
      dispatch({
        type: actions.LOGIN,
        user: data,
        token
      });
    } catch (error) {
      console.log(error.response);
    }

    dispatch({
      type: actions.TOGGLE_FULL_SCREEN_SPINNER,
      value: false
    });
  }
}


export const logout = (history) => {
  return dispatch => {
    localStorage.removeItem("token");
    dispatch({
      type: actions.LOGOUT
    });
    history.push("/");
  }
}


export const getMyVideos = (id) => {
  return async dispatch => {
    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: true
    });

    try {
      const res = await axios.get(`/videos/user/${id}`);
      const data = res.data;
      console.log(data);
      dispatch({
        type: actions.ADD_MY_VIDEOS,
        videos: data
      });
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: false
    });
  }
}