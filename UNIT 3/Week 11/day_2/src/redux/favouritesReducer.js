import { ADD_FAVOURITE_COMPANY, REMOVE_FAVOURITE_COMPANY } from './actions';

const initialState = {
  favouriteCompanies: []
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_COMPANY:
      return {
        ...state,
        favouriteCompanies: [...new Set([...state.favouriteCompanies, action.payload])]
      };
    case REMOVE_FAVOURITE_COMPANY:
      return {
        ...state,
        favouriteCompanies: state.favouriteCompanies.filter(company => company !== action.payload)
      };
    default:
      return state;
  }
};

export default favouritesReducer;