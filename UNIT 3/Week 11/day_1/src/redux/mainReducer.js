const initialState = {
  jobs: [],
  query: '',
  favouriteCompanies: []
};

// Reducer
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return {
        ...state,
        jobs: action.jobs
      };
    case 'SET_QUERY':
      return {
        ...state,
        query: action.query
      };
    case 'ADD_FAVOURITE_COMPANY':
      return {
        ...state,
        favouriteCompanies: [...new Set([...state.favouriteCompanies, action.company])]
      };
    case 'REMOVE_FAVOURITE_COMPANY':
      return {
        ...state,
        favouriteCompanies: state.favouriteCompanies.filter(company => company !== action.company)
      };
    default:
      return state;
  }
};

export default mainReducer;
