/** @format */

import { USER_LOGGED_IN } from "../actions"

const initialState = {
  loginData: {},
}

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        loginData: action.payload,
      }

    default:
      return state
  }
}

export default loginUserReducer
