import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => (
  <>
  <div className="top-bar">
    <a href="/"><FontAwesomeIcon icon='mobile-alt'/>(555) 555-5555</a>
  </div>
  <nav className="main-nav">
    <div className="main-nav__inner wrapper">
      <h2>Logo</h2>

      <input type="checkbox" id="menu-toggle"/>
      <label htmlFor="menu-toggle" id="menu-label"><FontAwesomeIcon icon='bars'/></label>

      <ul className="desktop-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Gallery</Link>
        </li>
        <li>
          <Link to="/">Testimonials</Link>
        </li>
        <li>
          <Link to="/" className="cta">Let's Chat</Link>
        </li>
      </ul> 
    </div>
  </nav>
  </>
)

export default Nav