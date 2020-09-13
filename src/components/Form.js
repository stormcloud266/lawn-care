import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Form = () => (
  <section className="contact wrapper section">
    <div className="contact__text text">
      <h2>It's Time To Enjoy Your Perfect Yard</h2>

      <p>
        Lorem ipsum dolor sit amet <b>consectetur adipisicing</b> elit. Eum
        nemo, esse corporis voluptatibus nesciunt nihil odit expedita aliquam
        minus vitae obcaecati iure laborum labore repudiandae provident.
      </p>

      <div className="contact__address-container">
        <div className="contact__address">
          <div className="icon icon--border">
            <FontAwesomeIcon icon="map-marker-alt" />
          </div>
          <p>129 Address St. City, ST</p>
        </div>

        <div className="contact__address">
          <div className="icon icon--border">
            <FontAwesomeIcon icon="mobile-alt" />
          </div>
          <p>555-555-5555</p>
        </div>

        <div className="contact__address">
          <div className="icon icon--border">
            <FontAwesomeIcon icon={["far", "envelope"]} />
          </div>
          <p>info@domain.com</p>
        </div>
      </div>
    </div>

    <form action="">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="4"></textarea>

      <button className="cta">Get Started</button>
    </form>
  </section>
)

export default Form
