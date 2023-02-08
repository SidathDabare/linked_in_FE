import React from 'react'
import "../style/CardInfo.css"

const CardInfo = () => {
    return (
        <div className="card-div d-flex justify-content-between p-2">
            <div className="left-div">
                <p>Show recruiters you’re open ..</p>
                <p><small>control who sees this.</small></p>
                <p><small className='font-weight-bold text-info'>Get started</small></p>
            </div>
            <div className="right-div">
                <i className="bi bi-x-lg"></i>
            </div>

        </div>
    )
}

export default CardInfo