import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Testimonials = () => (
  <section className="testimonials text-light">
    <div className="testimonials__half image">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon='quote-left'/>
      </div>
    </div>


    <div className="testimonials__half text">
      <div className="testimonials__text-container">
        <h2>See what the clients are saying</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nemo accusamus perferendis enim sint iure earum dolorum est unde fugit.
        </p>
      </div>
    </div>
  </section>
)

export default Testimonials