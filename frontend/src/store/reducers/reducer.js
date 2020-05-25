import * as actions from "../actions/actions";

const initialState = {
  // User related stuff
  isAuth: false,
  user: null,
  token: null,
  currentUser: null,

  // Spinners related stuff
  showFullScreenSpinner: true,
  showContentSpinner: false,
  showBackdropSpinner: false,

  // Videos related stuff
  videos: null,
  video: null,
  searchVideos: null,
  myVideos: null,
  favouriteVideos: null,

  // Errors related stuff
  authError: null,

  // Alert related stuff
  showAlert: false,
  alertMessage: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_VIDEOS:
      return {
        ...state,
        videos: action.videos,
      };

    case actions.TOGGLE_CONTENT_SPINNER:
      return {
        ...state,
        showContentSpinner: action.value,
      };

    case actions.GET_VIDEO:
      return {
        ...state,
        video: action.video,
      };

    case actions.GET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actions.GET_SEARCH_VIDEOS:
      return {
        ...state,
        searchVideos: action.videos,
      };

    case actions.TOGGLE_BACKDROP_SPINNER:
      return {
        ...state,
        showBackdropSpinner: action.value,
      };

    case actions.ADD_AUTH_ERROR:
      return {
        ...state,
        authError: action.error,
      };

    case actions.LOGIN:
      return {
        ...state,
        currentUser: action.user,
          token: action.token,
          isAuth: true,
      };

    case actions.TOGGLE_FULL_SCREEN_SPINNER:
      return {
        ...state,
        showFullScreenSpinner: action.value,
      };

    case actions.LOGOUT:
      return {
        ...state,
        isAuth: false,
          currentUser: null,
          token: null,
      };

    case actions.ADD_MY_VIDEOS:
      return {
        ...state,
        myVideos: action.videos,
      };

    case actions.ADD_FAVOURITE_VIDEOS:
      return {
        ...state,
        favouriteVideos: action.videos,
      };

    case actions.ADD_VIDEO:
      return {
        ...state,
        videos: state.videos ? state.videos.concat(action.video) : null,
          myVideos: state.myVideos ? state.myVideos.concat(action.video) : null,
      };

    case actions.UPDATE_VIDEO:
      return {
        ...state,
        video: action.video,
          favouriteVideos: null
      };

    case actions.UPDATE_USER:
      return {
        ...state,
        currentUser: action.user
      };

    case actions.REMOVE_AUTH_ERROR:
      return {
        ...state,
        authError: null
      };

    case actions.SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
          alertMessage: action.message
      };

    case actions.REMOVE_ALERT:
      return {
        ...state,
        showAlert: false,
          alertMessage: null
      };

    case actions.TOGGLE_SUBSCRIBE:
      let user = state.user;
      let video = state.video;

      if (user) {
        if (user.user._id === action.user._id) {
          user.user = {
            ...action.user
          };
        }
      }

      if (video) {
        if (video.user._id === action.user._id) {
          video.user = {
            ...action.user
          };
        }
      }

      return {
        ...state,
        user,
        video
      };


    default:
      return state;
  }
};