/** @format */

import { GET_DATA_FOR_MY_PROFILE } from "../actions"

const initialState = {
  profileData: {},
}

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FOR_MY_PROFILE:
      return {
        ...state,
        profileData: action.payload,
      }

    default:
      return state
  }
}

export default myProfileReducer
