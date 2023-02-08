import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import "../style/Feed.css"

const Feed = () => {
    const allProfile = useSelector((state) => state.allProfiles.allProfilesData[0])
    //console.log("all" + allProfile[0][0].name + allProfile[0][0].surname);
    //console.log("all" + allProfile[2].name + allProfile[2].surname);

    return (
        <div className='feed'>

            <div className='p-3 d-flex justify-content-between'>
                <strong>Add to your feed</strong>
                <span><i className="bi bi-info-square-fill"></i></span>
            </div>
            {allProfile && allProfile.slice(0, 3).map((singleProfile, i) => (
                // <p key={i}>{singleProfile.name}</p>
                <div className='d-flex pl-2 ml-2 single-profile-div' key={i}>
                    <div className="users-profile-div">
                        <img className="users-profile-image" src={singleProfile.image} alt="" />
                    </div>
                    <div className="px-1 ml-2">
                        <Link className='user-page-link' to={`/user-profile/${singleProfile._id}`} ><strong className='user-page-link'>{singleProfile.name} {singleProfile.surname}</strong></Link>
                        {/* <div className='font-weight-bold'>{singleProfile.name} {singleProfile.surname}</div> */}
                        <div className='user-details pr-3'><small >{singleProfile.title}</small></div>
                        <button type="button" className="btn btn-outline-secondary rounded-pill mt-2 py-1 follow-btn">
                            <i className="bi bi-plus-lg"></i><strong> Follow</strong>
                        </button>
                    </div>
                </div>
            ))}
            <div className='px-3 mt-0'>
                <Link to="/"><span className='feed-bottom-text'>View all recommendations</span>
                    <span className='feed-bottom-icon' ><i className="bi bi-arrow-right mt-2"></i></span>
                </Link>
            </div>
        </div>
    )
}

export default Feed