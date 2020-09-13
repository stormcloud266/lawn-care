import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => (
  <footer className="footer text-light">
    <div className="footer__inner wrapper">
      <div className="footer__text">
        <h2>Logo</h2>
        <p>
          Lorem ipsum dolor sit amet
          <br />
          consectetur adipisicing elit.
        </p>
        <div className="footer__social">
          <a href="/">
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer
