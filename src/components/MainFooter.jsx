/** @format */

import React from "react"
import { Container } from "react-bootstrap"
import "../style/MainFooter.css"

const MainFooter = () => {
  return (
    <Container className='main-footer my-5'>
      <div>
        <img
          className='my-footer-logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/2560px-LinkedIn_Logo_2013.svg.png'
          alt=''
        />
      </div>
      <div className='d-flex my-3'>
        <div className='footer-div'>
          <p>About</p>
          <p>Community Guidelines</p>
          <p>
            Privacy & Terms<i className='bi bi-chevron-compact-down ml-1'></i>{" "}
          </p>
          <p>Sales Solutions</p>
          <p>Safety Center</p>
        </div>
        <div className='footer-div'>
          <p>Accessibility</p>
          <p>Careers</p>
          <p>Ad Choices</p>
          <p>Mobile</p>
        </div>
        <div className='footer-div'>
          <p>Talent Solution</p>
          <p>Marketing Solution</p>
          <p>Advertising</p>
          <p>Small Business</p>
        </div>
        <div className='footer-div-link'>
          <div className='d-flex'>
            <div>
              <i className='bi bi-question-circle-fill p-2 icon-size-small'></i>
            </div>
            <div>
              <p>
                <strong>Questions?</strong>
              </p>
              <p>
                <small>Visit our Help Center.</small>
              </p>
            </div>
          </div>
          <div className='d-flex'>
            <div>
              <i className='bi bi-gear-fill p-2 icon-size-small'></i>
            </div>
            <div>
              <p>
                <strong>Questions?</strong>
              </p>
              <p>
                <small>Visit our Help Center.</small>
              </p>
            </div>
          </div>
        </div>

        <div className='form-group footer-div-last'>
          <label htmlFor='exampleSelect'>Example select</label>
          <select className='form-control language-select' id='exampleSelect'>
            <option>English</option>
            <option>Italian</option>
            <option>Spanish</option>
            <option>Arabic</option>
            <option>Dutch</option>
          </select>
        </div>
      </div>
      <div>
        <small>LinkedIn Corporation © 2022</small>
      </div>
    </Container>
  )
}

export default MainFooter
