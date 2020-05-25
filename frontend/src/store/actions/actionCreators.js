import axios from "axios";
import * as actions from "./actions";

export const getAllVideos = () => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: true,
    });

    try {
      const res = await axios.get("/videos");
      const videos = res.data;
      dispatch({
        type: actions.GET_ALL_VIDEOS,
        videos,
      });
    } catch (error) {}

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

    try {
      const res = await axios.get(`/videos/${_id}`);
      const video = res.data;

      dispatch({
        type: actions.GET_VIDEO,
        video,
      });
    } catch (error) {}

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

    try {
      const res = await axios.get(`/user/${_id}`);
      const user = res.data;

      dispatch({
        type: actions.GET_USER,
        user,
      });
    } catch (error) {}

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

      dispatch({
        type: actions.GET_SEARCH_VIDEOS,
        videos,
      });
    } catch (error) {}

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

      dispatch({
        type: actions.LOGIN,
        user: data.user,
        token: data.token,
      });
      localStorage.setItem("token", data.token);
      history.push("/");
      dispatch({
        type: actions.SHOW_ALERT,
        message: "You signed up successfully",
      });
    } catch (error) {
      if (error.response) {
        dispatch({
          type: actions.SHOW_ALERT,
          message: error.response.data.message,
        });
        dispatch({
          type: actions.ADD_AUTH_ERROR,
          error: error.response.data.message,
        });
      }
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

      dispatch({
        type: actions.LOGIN,
        user: data.user,
        token: data.token,
      });
      localStorage.setItem("token", data.token);
      history.push("/");
      dispatch({
        type: actions.SHOW_ALERT,
        message: "You logged in successfully",
      });
    } catch (error) {
      if (error.response) {
        dispatch({
          type: actions.SHOW_ALERT,
          message: error.response.data.message,
        });
        dispatch({
          type: actions.ADD_AUTH_ERROR,
          error: error.response.data.message,
        });
      }
    }

    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: false,
    });
  };
};

export const isLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch({
        type: actions.TOGGLE_FULL_SCREEN_SPINNER,
        value: false,
      });
      return;
    }

    dispatch({
      type: actions.TOGGLE_FULL_SCREEN_SPINNER,
      value: true,
    });

    try {
      const res = await axios.get("/user/isLogin", {
        headers: {
          Authorization: token,
        },
      });
      const data = res.data;

      dispatch({
        type: actions.LOGIN,
        user: data,
        token,
      });
    } catch (error) {}

    dispatch({
      type: actions.TOGGLE_FULL_SCREEN_SPINNER,
      value: false,
    });
  };
};

export const logout = (history) => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
      type: actions.LOGOUT,
    });
    history.push("/");
    dispatch({
      type: actions.SHOW_ALERT,
      message: "You logged out",
    });
  };
};

export const getMyVideos = (id) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: true,
    });

    try {
      const res = await axios.get(`/videos/user/${id}`);
      const data = res.data;

      dispatch({
        type: actions.ADD_MY_VIDEOS,
        videos: data,
      });
    } catch (error) {}

    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: false,
    });
  };
};

export const getFavouriteVideos = (id) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: true,
    });

    try {
      const res = await axios.get(`/videos/favourites/user/${id}`);
      const data = res.data;
      dispatch({
        type: actions.ADD_FAVOURITE_VIDEOS,
        videos: data,
      });
    } catch (error) {}

    dispatch({
      type: actions.TOGGLE_CONTENT_SPINNER,
      value: false,
    });
  };
};

export const postVideo = (title, description, video, img, token, history) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: true,
    });

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("video", video);
      formData.append("image", img);

      const res = await axios.post("/videos", formData, {
        headers: {
          Authorization: token,
        },
      });
      const data = res.data;

      dispatch({
        type: actions.ADD_VIDEO,
        video: data,
      });
      history.push("/");
      dispatch({
        type: actions.SHOW_ALERT,
        message: "Video posted successfully",
      });
    } catch (error) {
      if (error.response) {
        dispatch({
          type: actions.SHOW_ALERT,
          message: error.response.data.message,
        });
        dispatch({
          type: actions.ADD_AUTH_ERROR,
          error: error.response.data.message,
        });
      }
    }

    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: false,
    });
  };
};

export const toggleFavouriteVideo = (videoId, token, bool) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: true,
    });

    try {
      const res = await axios.post(
        `/videos/${bool ? "favourite" : "unfavourite"}/${videoId}`,
        null, {
          headers: {
            Authorization: token,
          },
        }
      );
      const data = res.data;

      dispatch({
        type: actions.UPDATE_VIDEO,
        video: data,
      });
      dispatch({
        type: actions.SHOW_ALERT,
        message: bool ? "Added to favourites" : "Removed from  favourites",
      });
    } catch (error) {}

    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: false,
    });
  };
};

export const postComment = (videoId, token, comment) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: true,
    });

    try {
      const res = await axios.post(
        `/videos/comment/${videoId}`, {
          comment,
        }, {
          headers: {
            Authorization: token,
          },
        }
      );
      const data = res.data;
      dispatch({
        type: actions.UPDATE_VIDEO,
        video: data,
      });
      dispatch({
        type: actions.SHOW_ALERT,
        message: "Comment posted successfully",
      });
    } catch (error) {}

    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: false,
    });
  };
};

export const editProfile = (name, img, token, history) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: true,
    });

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", img);
      const res = await axios.patch("/user", formData, {
        headers: {
          Authorization: token,
        },
      });
      const data = res.data;

      dispatch({
        type: actions.UPDATE_USER,
        user: data,
      });
      history.push("/");
      dispatch({
        type: actions.SHOW_ALERT,
        message: "Video posted successfully",
      });
      dispatch({
        type: actions.SHOW_ALERT,
        message: "Your profile has updated",
      });
    } catch (error) {}

    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: false,
    });
  };
};

export const toggleSubscribe = (userId, token, bool) => {
  return async (dispatch) => {
    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: true,
    });

    try {
      const res = await axios.post(
        `/user/${bool ? "subscribe" : "unsubscribe"}/${userId}`,
        null, {
          headers: {
            Authorization: token,
          },
        }
      );
      const data = res.data;
      console.log(data)
      dispatch({
        type: actions.TOGGLE_SUBSCRIBE,
        user: data
      });
      dispatch({
        type: actions.SHOW_ALERT,
        message: `You ${bool ? "subscribed":"unsubscribed"} to this channal`
      })
    } catch (error) {

    }

    dispatch({
      type: actions.TOGGLE_BACKDROP_SPINNER,
      value: false,
    });
  };
};