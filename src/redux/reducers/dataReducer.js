const initialState = {
  mainUserData: [],
  userRepos: [],
  languages: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MAIN_DATA_SUCCESS":
      return {
        ...initialState,
        mainUserData: action.payload,
      };
    case "FETCH_REPOS_DATA_SUCCESS":
      return {
        ...state,
        userRepos: action.payload,
      };

    case "FETCH_LANGUAGES_DATA_SUCCESS":
      return {
        ...state,
        languages: action.payload,
      };
    case "FETCH_MAIN_DATA_ERROR":
    case "FETCH_REPOS_DATA_ERROR":
    case "FETCH_LANGUAGES_DATA_ERROR":
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
