import axios from 'axios';

export const fetchData = (gitUserName) => async dispatch => {
  try {
    dispatch({ type: 'FETCH_DATA' });

    const { data } = await axios.get(`https://api.github.com/users/${gitUserName}`)
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_ERROR', payload: error });
  }
};

