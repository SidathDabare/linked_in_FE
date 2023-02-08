/** @format */

import React from "react"
import "../style/ToggleMenu.css"

const ToggleMenu = () => {
  return (
    <div className='toggle-menu p-3'>
      <div className='d-flex justify-content-between'>
        <span>
          <h5>Work</h5>
        </span>
        <span>
          <i className='bi bi-x-lg'></i>
        </span>
      </div>
      <div className='content-div'>
        <div className='toggle-section01 mt-4'>
          <div className='mx-3 py-2 '>
            <span>Visit More LinkedIn Products</span>
          </div>
          <div className='d-flex justify-content-between mx-2 text-center'>
            <div>
              <div className='toggle-item'>
                <i className='bi bi-play-btn-fill'></i>
              </div>
              <small>Learning</small>
            </div>
            <div>
              <div className='toggle-item'>
                <i className='bi bi-graph-down'></i>
              </div>
              <small>Insight</small>
            </div>
            <div>
              <div className='toggle-item'>
                <i className='bi bi-envelope-fill'></i>
              </div>
              <small>Post a Job</small>
            </div>
            <div>
              <div className='toggle-item'>
                <i className='bi bi-bullseye'></i>
              </div>
              <small>Advertise</small>
            </div>
          </div>
          <div className='d-flex justify-content-between mx-2 text-center'>
            <div>
              {" "}
              <div className='toggle-item'>
                <i className='bi bi-compass'></i>
              </div>
              <small>Find Leads</small>
            </div>
            <div>
              <div className='toggle-item'>
                <i className='bi bi-people-fill'></i>
              </div>
              <small>Groups</small>
            </div>
            <div>
              <div className='toggle-item'>
                <i className='bi bi-activity'></i>
              </div>
              <small>Service</small>
            </div>
            <div>
              <div className='toggle-item'>
                <i className='bi bi-cash-stack'></i>
              </div>
              <small>Salary</small>
            </div>
          </div>
        </div>
        <div className='toggle-section02 mt-5'>
          <div className='px-4'>
            <h6>LinkedIn Business Services</h6>
          </div>
          <div className='px-4'>
            <p>Talent Solutions</p>
            <small>Find, attract and recruit talent</small>
          </div>
          <div className='px-4'>
            <p>Sales Solutions</p>
            <small>Unlock sales opportunites</small>
          </div>
          <div className='px-4'>
            <p>Post job for free</p>
            <small>Get your job in front of quality candidatest</small>
          </div>
          <div className='px-4'>
            <p>Marketing Solutions</p>
            <small>Acquire customers and grow your business</small>
          </div>
          <div className='px-4'>
            <p>Learning Solutions</p>
            <small>Develop talent across your organization</small>
          </div>
          <div className='px-4'>
            <h6>
              Create a Linkedin Page{" "}
              <span>
                <i className='bi bi-plus-lg'></i>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToggleMenu
