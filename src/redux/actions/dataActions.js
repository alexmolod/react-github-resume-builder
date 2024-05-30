import axios from 'axios';

export const fetchUserMainData = (gitUserName) => async dispatch => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/users/${gitUserName}`)

    dispatch({ type: 'FETCH_MAIN_DATA_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_MAIN_DATA_ERROR', payload: error });
  }
};

export const fetchUserReposData = (gitUserName) => async dispatch => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/users/${gitUserName}/repos`)

    dispatch({ type: 'FETCH_REPOS_DATA_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_REPOS_DATA_ERROR', payload: error });
  }
};

export const fetchLanguagesData = (gitUserName, ids) => async dispatch => {
  try {
    const promises = ids.map(async id => {
      const data = await axios.get(`${process.env.REACT_APP_API_URL}/repos/${gitUserName}/${id}/languages`)

      return data;
    });

    const responses = await Promise.all(promises);

    dispatch({ type: 'FETCH_LANGUAGES_DATA_SUCCESS', payload: responses });
  } catch (error) {
    dispatch({ type: 'FETCH_LANGUAGES_DATA_ERROR', payload: error });
  }
};