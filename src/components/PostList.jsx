/** @format */

import React, { useRef } from "react"
import "../style/PostList.css"
import Post from "./Post"
import { useDispatch, useSelector } from "react-redux/es/exports"
import AlertDismissible from "./AlertDelete"
import { useEffect, useState } from "react"
import {
  getAllPostsActionWithThunk,
  resetLoadingAction,
} from "../redux/actions"

const PostList = () => {
  const [showAlert, setShowAlert] = useState(false)

  const handleShowAlert = () => {
    setShowAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  const dispatch = useDispatch()
  const change = useSelector((state) => state.allChanges.changes)

  useEffect(() => {
    dispatch(getAllPostsActionWithThunk())
  }, [change])

  let posts = useSelector((state) => state.allPosts.allPosts)

  return (
    <div className='post-list'>
      <AlertDismissible
        id='alert-delete'
        showAlert={showAlert}
        setCloseAlert={handleCloseAlert}
      />

      {posts?.map((post) => (
        <Post key={post._id} data={post} handleShowAlert={handleShowAlert} />
      ))}
    </div>
  )
}

export default PostList
