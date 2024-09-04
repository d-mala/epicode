import { SET_JOBS, SET_QUERY, CLEAR_JOBS } from './actions';

const initialState = {
  jobsList: [],
  query: ''
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobsList: action.payload
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload
      };
    case CLEAR_JOBS:
      return {
        ...state,
        jobsList: []
      };
    default:
      return state;
  }
};

export default jobsReducer;