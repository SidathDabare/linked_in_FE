/** @format */

import axios from "axios"

export const GET_DATA_FOR_MY_PROFILE = "GET_DATA_FOR_MY_PROFILE"
export const GET_DATA_FOR_ALL_PROFILES = "GET_DATA_FOR_ALL_PROFILES"
export const GET_DATA_FOR_SINGLE_USER_ID = "GET_DATA_FOR_SINGLE_USER_ID"
export const GET_SINGLE_USER_EXP = "GET_SINGLE_USER_EXP"
export const GET_DATA_FOR_ALL_POSTS = "GET_DATA_FOR_ALL_POSTS"
export const GET_SINGLE_EXP = "GET_SINGLE_EXP"
export const USER_LOGGED_IN = "USER_LOGGED_IN"
export const PUT_REQUEST = "PUT_REQUEST"
export const SET_LOADING_TRUE = " SET_LOADING_TRUE"
export const SET_LOADING_FALSE = "SET_LOADING_FALSE"
export const CREATE_POST = "CREATE_POST"
export const UPDATE_POST = "UPDATE_POST"
export const DELETE_POST = "DELETE_POST"
export const SELECT_POST = "SELECT_POST"

// export const getMyProfileDataActionWithThunk = () => {
//   return async (dispatch) => {
//     let headers = {
//       Authorization: `Bearer ${process.env.REACT_APP_TOKEN_MY}`,
//       "Content-type": "application/json",
//     }
//     try {
//       let response = await fetch(
//         `https://striveschool-api.herokuapp.com/api/profile/me`,
//         {
//           method: "GET",
//           headers,
//         }
//       )

//       let myProfileData = await response.json()

//       dispatch({
//         type: GET_DATA_FOR_MY_PROFILE,
//         payload: myProfileData,
//       })
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }
export const loginUserDataActionWithThunk = (userData) => {
  return async (dispatch) => {
    try {
      let loggedInData = await userData
      console.log(loggedInData)
      dispatch({
        type: USER_LOGGED_IN,
        payload: loggedInData,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const getAllProfilesActionWithThunk = () => {
  // let headers = {
  //   Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  //   "Content-type": "application/json",
  // }
  return async (dispatch) => {
    try {
      let response = await fetch(`${process.env.REACT_APP_URL}/users`, {
        method: "GET",
        //headers,
      })

      let allProfilesData = await response.json()

      dispatch({
        type: GET_DATA_FOR_ALL_PROFILES,
        payload: allProfilesData,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getProfileBasedOnId = (userId) => {
  // let headers = {
  //   Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  //   "Content-type": "application/json",
  // }
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL}/users/${userId}`,
        {
          method: "GET",
          //headers,
        }
      )

      let singleUserData = await response.json()
      console.log(singleUserData)

      dispatch({
        type: GET_DATA_FOR_SINGLE_USER_ID,
        payload: singleUserData,
      })
    } catch (err) {
      console.log(err)
    }
  }
}
export const getUserExpById = (userId) => {
  // let headers = {
  //   Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  //   "Content-type": "application/json",
  // }
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL}/users/${userId}/experiences`,
        {
          method: "GET",
          //headers,
        }
      )

      let singleUserExperiences = await response.json()
      dispatch({
        type: GET_SINGLE_USER_EXP,
        payload: singleUserExperiences,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getSingletUserExpById = (userId, expId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL}/users/${userId}/experiences/${expId}`,
        {
          method: "GET",
          // headers: {
          //   Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          //   "Content-type": "application/json",
          // },
        }
      )
      let singleExperiences = await response.json()
      //console.log(singleExperiences)
      dispatch({
        type: GET_SINGLE_EXP,
        payload: singleExperiences,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getAllPostsActionWithThunk = () => {
  const url = process.env.HEROKU_BE_URL
  return async (dispatch) => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_URL}/posts`)

      let data = response.data

      dispatch({
        type: GET_DATA_FOR_ALL_POSTS,
        payload: data,
      })
      dispatch(resetLoadingAction())
    } catch (err) {
      console.log(err)
    }
  }
}

export const createPostActionWithThunk = (body, data) => async (dispatch) => {
  try {
    let response = await axios.post(`${process.env.REACT_APP_URL}/posts`, body)

    let post = await handleFileSend(data, response.data.id)

    console.log(post.data)

    dispatch({
      type: CREATE_POST,
      payload: post.data,
    })
  } catch (error) {}
}

export const updatePostActionWithThunk =
  (id, body, pic) => async (dispatch) => {
    try {
      const postNoPic = await axios.put(
        process.env.REACT_APP_URL + "/posts/" + id,
        body
      )

      if (!pic) {
        dispatch({
          type: UPDATE_POST,
          payload: postNoPic.data,
        })
        return
      }
      let post = await handleFileSend(pic, id)
      dispatch({
        type: UPDATE_POST,
        payload: post.data,
      })
    } catch (error) {}
  }

export const setLoadingAction = () => {
  return {
    type: SET_LOADING_TRUE,
  }
}

export const resetLoadingAction = () => {
  return {
    type: SET_LOADING_FALSE,
  }
}

const handleFileSend = async (selectedFile, id) => {
  const data = new FormData()
  data.append("post", selectedFile)
  const response = await axios.post(
    `${process.env.REACT_APP_URL}/posts` + id,
    data
  )
  return response
}

export const selectPostAction = (postId) => {
  return {
    type: SELECT_POST,
    payload: postId,
  }
}

export const deletePostActionWithThunk = (postId) => async (dispatch) => {
  try {
    axios.delete(`${process.env.REACT_APP_URL}/posts/${postId}`)

    dispatch({
      type: DELETE_POST,
      payload: postId,
    })
  } catch (error) {}
}
