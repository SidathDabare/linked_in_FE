import { PUT_REQUEST } from "../actions"
import {SET_LOADING_TRUE} from "../actions"
import {SET_LOADING_FALSE} from '../actions'

const initialState = {
  changes: [],
  isLoading: false
}

const refreshReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_REQUEST:
      return {
        ...state,
        changes:[  action.payload]
      }
      case SET_LOADING_TRUE: 
      return{
        ...state,
        isLoading: true
      }
      case SET_LOADING_FALSE: 
      return{
        ...state,
        isLoading: false
      }
    

    default:
      return state
  }
}

export default refreshReducer