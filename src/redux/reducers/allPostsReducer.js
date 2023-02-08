import {GET_DATA_FOR_ALL_POSTS, CREATE_POST, UPDATE_POST, SELECT_POST, DELETE_POST} from '../actions'

const initialState = {
  allPosts: [],
  selectedPostId:''
}

const allPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FOR_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload
      }

    case CREATE_POST:
      return {
        ...state, allPosts:[...state.allPosts,action.payload]
      }

    case SELECT_POST: 
     return {
      ...state, selectedPostId: action.payload
     }

      case UPDATE_POST: 
      return {
          ...state, allPosts: state.allPosts.map( post => post._id === state.selectedPostId ? action.payload : post)
      }

      case DELETE_POST:
        return {
          ...state, allPosts: state.allPosts.filter( post => post._id !== action.payload)
        }

    default:
      return state
  }
}

export default allPostsReducer