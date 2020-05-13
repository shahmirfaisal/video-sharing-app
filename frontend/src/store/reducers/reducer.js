import * as actions from '../actions/actions';

const initialState = {
  // User related stuff
  isAuth: true,
  user: null,

  // Spinners related stuff
  showFullScreenSpinner: false,
  showContentSpinner: true,
  showBackdropSpinner: false,

  // Videos related stuff
  videos: null,
  video: null,
  searchVideos: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_VIDEOS:
      return {
        ...state,
        videos: action.videos
      }

      case actions.TOGGLE_CONTENT_SPINNER:
        return {
          ...state,
          showContentSpinner: action.value
        }

        case actions.GET_VIDEO:
          return {
            ...state,
            video: action.video
          }

          case actions.GET_USER:
            return {
              ...state,
              user: action.user
            }

            case actions.GET_SEARCH_VIDEOS:
              return {
                ...state,
                searchVideos: action.videos
              }

              default:
                return state;
  }
};