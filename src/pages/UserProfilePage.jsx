/** @format */

import React, { useEffect, useState } from "react"
import { Container, ProgressBar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  getProfileBasedOnId,
  getAllProfilesActionWithThunk,
} from "../redux/actions"
import { Link, useParams } from "react-router-dom"
import MyNavbar from "../components/MyNavbar"
import "../style/UserProfile.css"
import CardInfo from "../components/CardInfo"
import ViewedUsers from "../components/ViewedUsers"
import Experience from "../components/Experience"
import MainFooter from "../components/MainFooter"

const UserProfile = () => {
  let id = useParams()._id
  //console.log(id)
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const [searchResult, setSearchResult] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  //const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    dispatch(getProfileBasedOnId(id))
    dispatch(getAllProfilesActionWithThunk())
    setUser(id)
  }, [id])
  // const {userProfile} = useSelector(
  //   (state) => state.userIdProfile.userIdProfileData
  // )
  const userProfile = useSelector(
    (state) => state.userIdProfile.userIdProfileData
  )
  //console.log(userProfile)

  return (
    <div>
      <MyNavbar
        setSearchResult={setSearchResult}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchResult={searchResult}
      />
      <Container className='d-flex justify-content-between user-profile'>
        <div className='left-container mr-2'>
          <div className='my-profile-div'>
            <div className='profile-header-div'>
              <div className='profile-cover-div'>
                <img
                  className='my-cover-image'
                  src='https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg'
                  alt=''
                />
                {/* <div className='camera-div'>
                  <i className='bi bi-camera-fill' disabled></i>
                </div> */}
              </div>

              <div className='my-profile-deatails d-flex justify-content-between p-3'>
                <div className='mt-2'>
                  <h4>
                    {userProfile && userProfile.name}{" "}
                    {userProfile && userProfile.surname}
                  </h4>
                  <p>{userProfile && userProfile.title}</p>
                  <p className='contact-info'>
                    {userProfile && userProfile.area}
                    <Link to='/'> Contact info</Link>
                  </p>
                  {/* <p>{userProfile.bio}</p> */}
                  <small>12 connections</small>
                </div>
                {/* <div>
                  <i className='bi bi-pen'></i>
                </div> */}
              </div>
              <div className='my-image-container'>
                <img
                  className='my-profile-image'
                  src={
                    userProfile.image
                      ? userProfile.image
                      : "https://static.thenounproject.com/png/2247019-200.png"
                  }
                  alt=''
                />
              </div>
              <div className='action-container d-flex justify-content-start'>
                <button
                  type='button'
                  className='btn btn-info rounded-pill ml-2 px-3 py-1 action-btn'>
                  Open to
                </button>
                <button
                  type='button'
                  className='btn btn-outline-info rounded-pill ml-2 px-3 py-1 action-btn'>
                  Add profile section
                </button>
                <button
                  type='button'
                  className='btn btn-outline-info rounded-pill ml-2 px-3 py-1 action-btn'>
                  More
                </button>
              </div>
              <div className='bottom-carosel d-flex justify-content-between p-2'>
                <CardInfo />
                <CardInfo />
              </div>
            </div>
          </div>
          <div className='my-profile-section02 mt-3'>
            <div className='px-3 mt-3'>
              <h4>Suggested for you</h4>
              <p>
                <span>
                  <i className='bi bi-eye-fill mr-2'></i>
                </span>
                <span>Private to you</span>
              </p>
            </div>
            <div className='px-3 my-3'>
              <strong>
                <small className='my-2'>Intermediate</small>
              </strong>
              <div>
                <span>
                  <ProgressBar now={60} />
                </span>
              </div>
              <small>
                <span>Complete 3 steps to achieve</span>
                <span className='font-weight-bold text-info ml-2'>
                  All-star
                </span>
              </small>
            </div>
            <div className='p-3 border-top'>
              <p>
                <strong>
                  Write a summary to highlight your personality or work
                  experience
                </strong>
              </p>
              <p>
                <small>
                  Members who include a summary receive up to 3.9 times as many
                  profile views.
                </small>
              </p>
              <button
                type='button'
                className='btn btn-outline-secondary rounded-pill px-3 py-1 follow-btn'>
                Add a summary
              </button>
            </div>
          </div>
          <div className='my-profile-section03 mt-3'>
            <div className='px-3 mt-3'>
              <h4>Analytics</h4>
              <p>
                <span>
                  <i className='bi bi-eye-fill mr-2'></i>
                </span>
                <span>Private to you</span>
              </p>
            </div>
            <div className='px-3 my-3 d-flex'>
              <div className='d-flex p-3'>
                <div className='px-3'>
                  <i className='bi bi-people-fill icon-size'></i>
                </div>
                <div>
                  <p className='mb-0'>
                    <strong>2 profile views</strong>
                  </p>
                  <p>
                    <small> Discover who's viewed your profile.</small>
                  </p>
                </div>
              </div>
              <div className='d-flex p-3'>
                <div className='px-3'>
                  <i className='bi bi-search icon-size'></i>
                </div>
                <div>
                  <p className='mb-0'>
                    <strong>1 search appearance</strong>
                  </p>
                  <p>
                    <small> See how often you appear in search results.</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='my-profile-section04 mt-3'>
            <Experience user_id={userProfile._id} isAdmin={false} />
          </div>
        </div>
        <div className='right-container'>
          <div className='add-info-div px-3 pt-2'>
            <div className='d-flex justify-content-between border-bottom py-2'>
              <span>Edit public profile & URL</span>
              <span>
                <i className='bi bi-question-circle-fill'></i>
              </span>
            </div>
            <div className='d-flex justify-content-between py-2'>
              <span>Add profile in another language</span>
              <span>
                <i className='bi bi-question-circle-fill'></i>
              </span>
            </div>
          </div>
          <div className='mt-3'>
            <ViewedUsers />
          </div>
        </div>
      </Container>

      <MainFooter />
    </div>
  )
}

export default UserProfile
