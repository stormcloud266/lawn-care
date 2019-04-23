import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => (
  <>
  <div className="top-bar">
    <a href="/"><FontAwesomeIcon icon='mobile-alt'/>307-555-5555</a>
  </div>
  <nav className="main-nav">
    <div className="main-nav__inner wrapper">
      <h2>Logo</h2>

      <ul className="desktop-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link to="/pricing">Gallery</Link>
        </li>
        <li>
          <Link to="/blog">Testimonials</Link>
        </li>
        <li>
          <Link to="/contact" className="cta">Let's Chat</Link>
        </li>
      </ul> {/* end of desktop nav */}

{/**********  mobile nav **********/}

      {/* <input
            className="mobile-nav__checkbox"
            id="mobile-checkbox"
            type="checkbox"
          />

          <label className="mobile-nav__toggle" htmlFor="mobile-checkbox">
            <span />
            <span />
            <span />
          </label>

          <div className="mobile-nav">
            <div className="mobile-nav__top">
              <img src={logoOutline} alt="Stellr Home" />
              <Link to="/contact" className="cta-link" onClick={this.closeNav}>Let's Chat</Link>
            </div>

            <ul className="mobile-nav__list">
              <li>
                <Link to="/" activeClassName="mobile-nav__active" onClick={this.closeNav}>
                  <span className="mobile-nav__icon"><FontAwesomeIcon icon="home" /></span>
                  <span className="mobile-nav__text">Home</span>
                  <span className="mobile-nav__arrow"><FontAwesomeIcon icon="angle-up" /></span>
                </Link>
              </li>
              <li>
                <Link to="/services" activeClassName="mobile-nav__active" onClick={this.closeNav}>
                  <span className="mobile-nav__icon"><FontAwesomeIcon icon="user-cog" /></span>
                  <span className="mobile-nav__text">Services</span>
                  <span className="mobile-nav__arrow"><FontAwesomeIcon icon="angle-up" /></span>
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" activeClassName="mobile-nav__active" onClick={this.closeNav}>
                  <span className="mobile-nav__icon"><FontAwesomeIcon icon="code" /></span>
                  <span className="mobile-nav__text">Web Development</span>
                  <span className="mobile-nav__arrow"><FontAwesomeIcon icon="angle-up" /></span>
                </Link>
              </li>
              <li>
                <Link to="/services/website-maintenance" activeClassName="mobile-nav__active" onClick={this.closeNav}>
                  <span className="mobile-nav__icon"><FontAwesomeIcon icon="tools" /></span>
                  <span className="mobile-nav__text">Website Maintenance</span>
                  <span className="mobile-nav__arrow"><FontAwesomeIcon icon="angle-up" /></span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" activeClassName="mobile-nav__active" onClick={this.closeNav}>
                  <span className="mobile-nav__icon"><FontAwesomeIcon icon="dollar-sign" /></span>
                  <span className="mobile-nav__text">Pricing</span>
                  <span className="mobile-nav__arrow"><FontAwesomeIcon icon="angle-up" /></span>
                </Link>
              </li>
              <li>
                <Link to="/blog" activeClassName="mobile-nav__active" onClick={this.closeNav}>
                  <span className="mobile-nav__icon"><FontAwesomeIcon icon="pen-nib" /></span>
                  <span className="mobile-nav__text">Blog</span>
                  <span className="mobile-nav__arrow"><FontAwesomeIcon icon="angle-up" /></span>
                </Link>
              </li>
            </ul>
            
          </div> end of mobile nav inner */}

    </div>
  </nav>
  </>
)

export default Nav