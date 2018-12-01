import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div
    className = "header"
    style={{
      marginBottom: '1.45rem',
      minHeight: '250px',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
    <div className= "alien-moon"></div>
      <h1 style={{ margin: 0, lineHeight: "250px" }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
     
    </div>
  </div>
)

export default Header
