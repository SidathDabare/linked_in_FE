/** @format */

import React from "react"
import { Link } from "react-router-dom"
import "../style/Footer.css"

const Footer = () => {
    return (
        <div className='footer p-2'>
            <div className='px-4 mt-2 footer-content '>
                <p className="d-flex justify-content-around">
                    <Link to='/'>About</Link>
                    <Link to='/'>Accessibility</Link>
                    <Link to='/'>Help Center</Link>
                </p>
                <p className="d-flex justify-content-around">
                    <Link to='/'>Privacy & Terms <i className="bi bi-chevron-compact-down"></i> </Link>
                    <Link to='/'>Ad Choices</Link>
                </p>
                <p className="d-flex justify-content-around">
                    <Link to='/'>Advertising</Link>
                    <Link to='/'>Business Services <i className="bi bi-chevron-compact-down"></i> </Link>
                </p>
                <p className="d-flex justify-content-around">
                    <Link to='/'>Get the LinkedIn app</Link>
                    <Link to='/'>More</Link>
                </p>
            </div>
            <div className="copyright">
                <span><img className="footer-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/2560px-LinkedIn_Logo_2013.svg.png" alt="" /></span>
                <small> LinkedIn Corporation © 2022</small>

            </div>
        </div>
    )
}

export default Footer
