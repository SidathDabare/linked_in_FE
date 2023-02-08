/** @format */

import { GET_SINGLE_EXP } from "../actions"

const initialState = {
  singleExperiences: {},
}

const singleExp = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_EXP:
      return {
        ...state,
        singleExperiences: action.payload,
      }

    default:
      return state
  }
}
export default singleExp
