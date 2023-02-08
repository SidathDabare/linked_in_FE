/** @format */

import React, { useEffect, useState } from "react"
import MyNavbar from "../components/MyNavbar"
import About from "../components/About"
import AddPost from "../components/AddPost"
import Feed from "../components/Feed"
import Footer from "../components/Footer"

import PostList from "../components/PostList"
import Profile from "../components/Profile"
import { useDispatch } from "react-redux"
import "../style/HomePage.css"
import { getAllProfilesActionWithThunk } from "../redux/actions"
import { Container } from "react-bootstrap"

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    //dispatch(getMyProfileDataActionWithThunk())
    dispatch(getAllProfilesActionWithThunk())
  }, [])

  const [searchResult, setSearchResult] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
      <MyNavbar
        setSearchResult={setSearchResult}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchResult={searchResult}
      />
      <Container className='d-flex justify-content-between home-container'>
        <div style={{ marginTop: "60px", marginRight: "10px" }}>
          <Profile />
          <About />
        </div>

        <div style={{ marginTop: "60px" }}>
          <AddPost />
          <PostList />
        </div>
        <div style={{ marginTop: "60px", marginLeft: "10px" }}>
          <Feed />
          <Footer />
        </div>
      </Container>
    </div>
  )
}

export default HomePage
