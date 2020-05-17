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

  // Errors related stuff
  authError: null,
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
        showBackdropSpinner: action.value
      }

      case actions.ADD_AUTH_ERROR:
        return {
          ...state,
          authError: action.error
        }

        case actions.LOGIN:
          return {
            ...state,
            currentUser: action.user,
              token: action.token,
              isAuth: true
          }

          case actions.TOGGLE_FULL_SCREEN_SPINNER:
            return {
              ...state,
              showFullScreenSpinner: action.value
            }

            case actions.LOGOUT:
              return {
                ...state,
                isAuth: false,
                  currentUser: null,
                  token: null
              }

              case actions.ADD_MY_VIDEOS:
                return {
                  ...state,
                  myVideos: action.videos
                }

                default:
                  return state;
  }
};