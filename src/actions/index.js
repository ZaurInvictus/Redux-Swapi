import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';


export const getData = () => dispatch => {
  dispatch({ type: FETCH_START })
  axios
   .get(`https://swapi.co/api/people`)
   .then(({ data }) => {
    dispatch({
      type: FETCH_SUCCESS,
      payload: data.results
    });
  })
  .catch(err => {
    dispatch({
      type: FETCH_ERROR,
      error: err
    });
  });
};
