/** @format */

import "../style/PostList.css"
import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faHandsClapping,
  faShare,
  faPaperPlane,
  faHeart,
  faThumbsUp,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { putRequestAction } from "../redux/actions"
import { setLoadingAction } from "../redux/actions"
import { useState } from "react"
import ModalUpdatePost from "./ModalUpdatePost"
import PostOptions from "./PostOptions"


  const Post =({
  data,
  
  handleShowAlert,
  scrollTo
}) => {
  const [seeMore, setSeeMore] = useState(false)
  const [updatePost, setUpdatePost] = useState(false)

  const handleClose = () => setUpdatePost(false)
  const handleShow = () => setUpdatePost(true)

  return (
    <>
      
      <Card>
        <div className='d-flex flex-column post-top-section'>
          <div className='d-flex justify-content-between mb-3 '>
            <div className='d-flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 24 24'>
                <path d='M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
              <div className='d-flex flex-column'>
                <h6 className='post-top-title'>LinkedIn</h6>
                <p className='post-top-subtitle'>{data.username}</p>
              </div>
            </div>
            <div>
              <PostOptions
                id={data._id}
                updatePost={handleShow}
                setShowAlert={handleShowAlert}
                scrollTo
              />
            </div>
          </div>

          <div className='d-flex flex-column'>
            {data.text}
            {!seeMore && data.text.length > 67 && (
              <button
                onClick={() => {
                  setSeeMore(true)
                }}
                className={"mt-2 ml-auto post-description-top-see-more "}>
                see more
              </button>
            )}
          </div>
        </div>
        <div className='mt-2 ml-3 mb-2'>
          <a href='/' className='post-description-top-anchor'>
            https://lnkd.in/eAnha1w
          </a>
        </div>

        <Card.Img
          variant='top'
          src={data.image || process.env.REACT_APP_PLACEHOLDER_IMG_POST}
        />
        <Card.Body>
          <div className='post-bottom-section'>
            <div className='d-flex flex-column post-bottom-title '>
              <div className='d-flex justify-content-between align-items-center mb-2'>
                <h6>Read a post</h6>
                <button className='post-bottom-section-button'>
                  Learn more
                </button>
              </div>
              <p>linkedin.com</p>
            </div>
            <div className='d-flex flex-column mt-1'>
              <div
                className='d-flex align-items-center justify-content-between mx-3'
                style={{
                  borderBottom: "1px solid rgb(220,220,220)",
                  paddingBottom: "5px",
                }}>
                <div className='d-flex align-items-center'>
                  <div
                    className='position-relative d-flex'
                    style={{ color: "white" }}>
                    <div className='post-bottom-section-circle-icon post-bottom-section-circle-icon-thumbs-up'>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                    <p style={{ opacity: "0" }}>||||||||</p>
                    <div className='post-bottom-section-circle-icon-clap post-bottom-section-circle-icon position-absolute'>
                      <FontAwesomeIcon icon={faHandsClapping} />
                    </div>
                    <div className='post-bottom-section-circle-icon post-bottom-section-circle-icon-heart position-absolute'>
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <p>18,279</p>
                </div>
                <p>462 comments &#x2022; 303 shares</p>
              </div>
              <div className='post-bottom-section-large-icons-container d-flex justify-content-between align-items-center'>
                <div className='post-bottom-section-large-icons-and-text'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path d='M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z' />
                  </svg>
                  Like
                </div>
                <div className='post-bottom-section-large-icons-and-text'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path d='M144 208C126.3 208 112 222.2 112 239.1C112 257.7 126.3 272 144 272s31.1-14.25 31.1-32S161.8 208 144 208zM256 207.1c-17.75 0-31.1 14.25-31.1 32s14.25 31.1 31.1 31.1s31.1-14.25 31.1-31.1S273.8 207.1 256 207.1zM368 208c-17.75 0-31.1 14.25-31.1 32s14.25 32 31.1 32c17.75 0 31.99-14.25 31.99-32C400 222.2 385.8 208 368 208zM256 31.1c-141.4 0-255.1 93.12-255.1 208c0 47.62 19.91 91.25 52.91 126.3c-14.87 39.5-45.87 72.88-46.37 73.25c-6.624 7-8.373 17.25-4.624 26C5.818 474.2 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25c28.87 9 60.16 14.25 92.9 14.25c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM256 400c-26.75 0-53.12-4.125-78.36-12.12l-22.75-7.125L135.4 394.5c-14.25 10.12-33.87 21.38-57.49 29c7.374-12.12 14.37-25.75 19.87-40.25l10.62-28l-20.62-21.87C69.81 314.1 48.06 282.2 48.06 240c0-88.25 93.24-160 207.1-160s207.1 71.75 207.1 160S370.8 400 256 400z' />
                  </svg>
                  Comment
                </div>
                <div className='post-bottom-section-large-icons-and-text'>
                  <FontAwesomeIcon icon={faShare} style={{ height: "25px" }} />
                  Share
                </div>
                <div className='post-bottom-section-large-icons-and-text'>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ height: "25px" }}
                  />
                  Send
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </Card.Body>
      </Card>

      <ModalUpdatePost
        handleClose={handleClose}
        updatePost={updatePost}
        data={data}
      />
    </>
  )
}


export default Post