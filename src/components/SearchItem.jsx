/** @format */

import React from "react"
import "../style/MyNavbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function SearchItem({ name, surname, title, image, _id }) {
  return (
    <Link className='navbar-search-item-link' to={`/user-profile/${_id}`}>
      <div className='navbar-search-item d-flex align-items-center px-3'>
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            height: "12px",
            marginTop: "3px",
            color: "var(--secondary)",
          }}
        />
        <p style={{ margin: "0 0 0 20px" }}>
          {name} &nbsp;{surname}&nbsp;
          <strong>&#183;</strong>&nbsp;
          <span
            style={{
              margin: 0,
              color: "var(--secondary)",
              fontWeight: "300",
              fontSize: ".8rem",
            }}>
            {title}
          </span>
        </p>
        <img
          src={image}
          className='search-dropdown-profile-picture'
          alt='profile-picture'
        />
      </div>
    </Link>
  )
}
