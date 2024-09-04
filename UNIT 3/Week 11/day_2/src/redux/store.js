import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './favouritesReducer'
import jobsReducer from './jobsReducer'

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    jobs: jobsReducer
  },
})

export default store