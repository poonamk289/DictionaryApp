import axios from 'axios';
import { FETCH_DEFINITION_SUCCESS,FETCH_DEFINITION_REQUEST,FETCH_DEFINITION_FAILURE } from './actionType';

export const fetchAction = (word) => {
    return async (dispatch) => {
      dispatch({ type: FETCH_DEFINITION_REQUEST });
  
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const definition = response.data;
  
        dispatch({ type: FETCH_DEFINITION_SUCCESS, payload: definition });
      } catch (error) {
        dispatch({ type: FETCH_DEFINITION_FAILURE, payload: error });
      }
    };
  };