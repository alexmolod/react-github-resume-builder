const initialState = {
  data: {},
  loading: false,
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...initialState,
        data: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
 
    default:
      return state;
  }
};

export default dataReducer;
