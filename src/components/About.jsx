import React from 'react'
import { Link } from 'react-router-dom'
import "../style/About.css"

const About = () => {
    return (
        <div className='about p-2'>
            <div className='d-flex'>
                <div className='mb-0 link-container'>
                    <p><Link to="/">Group</Link></p>
                    <p><Link to="/">Events</Link></p>
                    <p><Link to="/">Followed Hashtags</Link></p>
                </div>
                <div className='plus-container'>
                    <i className="bi bi-plus-lg"></i>
                </div>
            </div>

            <div className='discover-div'>
                <p>Discover more</p>
            </div>

        </div>
    )
}

export default About