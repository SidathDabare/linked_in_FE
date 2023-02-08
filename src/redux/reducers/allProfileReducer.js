/** @format */

import { GET_DATA_FOR_ALL_PROFILES } from "../actions"

const initialState = {
  allProfilesData: {},
}

const allProfilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FOR_ALL_PROFILES:
      return {
        ...state,
        allProfilesData: [action.payload],
      }

    default:
      return state
  }
}

export default allProfilesReducer
