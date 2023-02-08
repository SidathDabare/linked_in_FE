/** @format */

import React, { useEffect, useState } from "react"
import { Container, Dropdown } from "react-bootstrap"
import "../style/MyNavbar.css"

import { FaSearch, FaGripHorizontal } from "react-icons/fa"
import { MdWork, MdPeopleAlt } from "react-icons/md"
import { AiFillMessage, AiFillBell } from "react-icons/ai"
import { ImHome3 } from "react-icons/im"
import { Link } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ToggleMenu from "./ToggleMenu"
import { useSelector } from "react-redux"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SearchItem from "./SearchItem"

const MyNavbar = (props) => {
  const [show, setShow] = useState(true)
  const { setSearchResult, setSearchTerm, searchTerm, searchResult } = props
  const myProfile = useSelector((state) => state.logUser.loginData)

  const allProfiles = useSelector(
    (state) => state.allProfiles.allProfilesData[0]
  )

  const handleSearch = (profileName) => {
    if (profileName.length > 2) {
      const filteredProfiles = allProfiles.filter(
        (profile) =>
          profile?.name.toLowerCase().includes(profileName.toLowerCase()) ||
          profile.surname
            .toLowerCase()
            .includes(
              profileName.toLowerCase() ||
                profile.username
                  .toLowerCase()
                  .includes(profileName.toLowerCase())
            )
      )
      setSearchResult(filteredProfiles)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event.target.value)
    }
  }

  return (
    <div className='main-nav-container'>
      <Container className='nav-container px-0 d-flex'>
        <div className='nav-section01 d-flex align-items-center'>
          <div className='nav-logo-div'>
            <img
              src='https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png'
              alt=''
              height={60}
            />
          </div>
          <div className={!show ? "nav-search-input" : "d-block"}>
            <FaSearch className={!show ? "searchIcon-sm" : "searchIcon"} />
            <input
              type='text'
              placeholder='Search'
              className={
                show
                  ? "mr-sm-5 nav-search-input-show navbarSearch "
                  : "navbarSearch-show"
              }
              value={searchTerm}
              onClick={(event) => {
                handleSearch(event.target.value)
              }}
              onKeyDown={(e) => {
                handleKeyPress(e)
              }}
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
            />
            <div className='dark-search-div'></div>
            {searchResult.length > 0 && (
              <div className='position-absolute search-dropdown'>
                <div className='border-bottom'>
                  <div className='d-flex justify-content-between text-secondary fw-light ml-3 mt-3 pb-2'>
                    <p className='mb-0'>Recent</p>
                    <p
                      className='mr-3  hover-pointer mb-0'
                      onClick={() => {
                        setSearchResult("")
                      }}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-x-lg'
                        viewBox='0 0 16 16'>
                        <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
                      </svg>
                    </p>
                  </div>

                  <div className='navbar-search-item-recent'>
                    {" "}
                    <FontAwesomeIcon icon={faClock} />
                    Alesio Cavone
                  </div>
                  <div className='navbar-search-item-recent'>
                    {" "}
                    <FontAwesomeIcon icon={faClock} />
                    epicode
                  </div>
                  <div className='navbar-search-item-recent'>
                    {" "}
                    <FontAwesomeIcon icon={faClock} />
                    Epitalk
                  </div>
                </div>
                <div className='navbar-search-results'>
                  <p className='navbar-dropdown-search-results-title mb-2 mt-3'>
                    Search Results
                  </p>
                  {searchResult.slice(0, 5).map((result) => {
                    console.log(result)
                    return (
                      <SearchItem
                        key={result._id}
                        className='SearchItem'
                        {...result}></SearchItem>
                    )
                  })}
                </div>
                <div
                  className='text-center pb-2 pt-2 see-all-results'
                  style={{
                    fontWeight: "500",
                    color: "#0073b1",
                    borderTop: "1px solid #dee2e6",
                  }}>
                  See all results
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='nav-section02'>
          <div className='menu-container-left'>
            <div className={show ? "menu-items search-show" : "d-none"}>
              <Link to='/' className='menu-items-links'>
                <FaSearch
                  className='searchBtn'
                  onClick={() => setShow(!show)}
                />
                <small className=''>Search</small>
              </Link>
            </div>
            <div className={show ? "menu-items page-active" : "d-none"}>
              <Link to='/' element={<HomePage />} className='menu-items-links'>
                <ImHome3 />
                <small className=''>Home</small>
              </Link>
            </div>
            <div className={show ? "menu-items" : "d-none"}>
              <Link to='/' element={<HomePage />} className='menu-items-links '>
                <MdPeopleAlt />
                <small className=''>MyNetwork</small>
              </Link>
            </div>
            <div className={show ? "menu-items" : "d-none"}>
              <Link to='/' className='menu-items-links'>
                <MdWork />
                <small className=''>jobs</small>
              </Link>
            </div>
            <div className={show ? "menu-items" : "d-none"}>
              <Link to='/' className='menu-items-links'>
                <AiFillMessage />
                <small className=''>Messaging</small>
              </Link>
            </div>
            <div className={show ? "menu-items" : "d-none"}>
              <Link to='/' className='menu-items-links'>
                <AiFillBell />
                <small className=''>Notification</small>
              </Link>
            </div>
            <div className={show ? "menu-items nav-profile-div" : "d-none"}>
              <img
                src={myProfile.image}
                alt=''
                className='ml-2 nav-profile-image'
              />{" "}
              <Dropdown>
                <Dropdown.Toggle
                  variant='white'
                  id='dropdown-basic'
                  className='nav-profile-div-text mt-1'>
                  <span> Me</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className='px-1 nav-profile-dropdown'>
                    <div className='nav-dropdown-section01 d-flex col-12'>
                      <div className='p-0 col-4'>
                        <img
                          src={myProfile.image}
                          alt=''
                          className='ml-2 d-block nav-profile-image-dropdown'
                        />
                      </div>
                      <div className='nav-profile-dropdown-details col-8 mt-2 px-0'>
                        <p className='font-weight-bold text-truncate'>
                          {myProfile.name} {myProfile.surname}
                        </p>
                        <p className='text-truncate'>{myProfile.title}</p>
                      </div>
                    </div>
                    {/* <button type="button" className="btn btn-outline-info btn-block rounded-pill px-5 py-1">View profile</button> */}
                    <Link
                      to={`/profile-page/${myProfile._id}`}
                      className='btn btn-outline-info btn-block rounded-pill py-0 mt-2'>
                      View profile
                    </Link>{" "}
                    <div className='nav-dropdown-section02'>
                      <div className='ml-3 nav-profile-dropdown-details'>
                        <p className='font-weight-bold'>Account</p>
                        <p>
                          <Link to='/'>Settings & Privacy</Link>
                        </p>
                        <p>
                          <Link to='/'>Help</Link>
                        </p>
                        <p>
                          <Link to='/'>Language</Link>
                        </p>
                      </div>
                    </div>
                    <div className='nav-dropdown-section03 border-top'>
                      <div className='ml-3 nav-profile-dropdown-details'>
                        <p className='font-weight-bold'>Manage</p>
                        <p>
                          <Link to='/'>Posts & Activity</Link>
                        </p>
                        <p>
                          <Link to='/'>Job Posting Account</Link>
                        </p>
                        <div className='border-top'>
                          <p>
                            <Link to='/signin'>Sign Out</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className={show ? "menu-container-right d-flex" : "d-none"}>
            <div className='menu-item-right-section01 col-3 px-2'>
              <Dropdown>
                <FaGripHorizontal className='d-block mx-auto' />
                <Dropdown.Toggle
                  variant='transparent'
                  id='dropdown-basic'
                  className='p-0'>
                  <span>
                    <div className='d-inline'>
                      <small className='menu-item-right-text'>Work</small>
                    </div>
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu className='toggle-container'>
                  <ToggleMenu />
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className={
                show
                  ? "menu-item-right-section02 text-center col-7 px-0"
                  : "d-none"
              }>
              <Link to='/' className='premium-link'>
                <p>Try Premium for</p>
                <p>free</p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MyNavbar
