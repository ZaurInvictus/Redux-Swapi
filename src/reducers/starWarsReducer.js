import {
 FETCH_START,
 FETCH_SUCCESS,
 FETCH_ERROR
} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_START:
      return {
        ...state,
        error: '',
        fetching: true
      }

    case FETCH_SUCCESS:
      return {
         ...state,
           fetching: false,
           characters: action.payload
      }

     case FETCH_ERROR:
        return {
          ...state,
          fetching: false,
          error: 'Uh no... something happened 😵!'
       }

    default:
      return state;
  }
};
