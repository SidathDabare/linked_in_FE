/** @format */

import { GET_DATA_FOR_SINGLE_USER_ID } from "../actions"

const initialState = {
  userIdProfileData: {},
}

const userIdProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FOR_SINGLE_USER_ID:
      return {
        ...state,
        userIdProfileData: action.payload,
      }

    default:
      return state
  }
}

export default userIdProfileReducer
