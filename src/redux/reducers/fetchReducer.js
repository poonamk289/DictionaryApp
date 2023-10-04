import {
    FETCH_DEFINITION_REQUEST,
    FETCH_DEFINITION_SUCCESS,
    FETCH_DEFINITION_FAILURE,
  } from './../actions/actionType';
  
  const initialState = {
    loading: false,
    definition: {},
    error: null,
  };
  
  const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DEFINITION_REQUEST:
        return { ...state, loading: true };
      case FETCH_DEFINITION_SUCCESS:
        return { ...state, loading: false, definition: action.payload, error: null };
      case FETCH_DEFINITION_FAILURE:
        return { ...state, loading: false, definition: {}, error: action.payload };
      default:
        return state;
    }
  };
  
  export default fetchReducer;
  