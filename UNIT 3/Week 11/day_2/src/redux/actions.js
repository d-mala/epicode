export const SET_JOBS = 'SET_JOBS';
export const SET_QUERY = 'SET_QUERY';
export const ADD_FAVOURITE_COMPANY = 'ADD_FAVOURITE_COMPANY';
export const REMOVE_FAVOURITE_COMPANY = 'REMOVE_FAVOURITE_COMPANY';
export const CLEAR_JOBS = 'CLEAR_JOBS';

export const setJobs = (jobsList) => ({
  type: SET_JOBS,
  payload: jobsList
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query
});

export const addFavouriteCompany = (company) => ({
  type: ADD_FAVOURITE_COMPANY,
  payload: company
});

export const removeFavouriteCompany = (company) => ({
  type: REMOVE_FAVOURITE_COMPANY,
  payload: company
});

export const clearJobs = () => ({
  type: CLEAR_JOBS
});

export const getCompanyJobsAction = (company) => {
  return async (dispatch) => {
    try {
      const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
      const response = await fetch(baseEndpoint + company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        console.log("Errore nel recupero dei risultati");
        throw new Error("Errore nel recupero dei risultati");
      }
    } catch (error) {
      console.log(error);
    }
  };
};