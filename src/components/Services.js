import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => (
  <section className="services section bg-1">

    <div className="services__title text wrapper">
      <h2>Check out All These Cool Things We Can Do</h2>
      <p>I might put a subheader here. I don't know let's see.</p>
    </div>

    <div className="services__list wrapper">

      <div className="services__item">
        <div className="icon icon--md"><FontAwesomeIcon icon='drafting-compass'/></div>
        <div className="services__text text">
          <h3>Advanced Lawn Care</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?</p>
        </div>
      </div>

      <div className="services__item">
        <div className="icon icon--md"><FontAwesomeIcon icon='tree'/></div>
        <div className="services__text text">
          <h3>Advanced Lawn Care</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?</p>
        </div>
      </div>

      <div className="services__item">
        <div className="icon icon--md"><FontAwesomeIcon icon='leaf'/></div>
        <div className="services__text text">
          <h3>Advanced Lawn Care</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?</p>
        </div>
      </div>

      <div className="services__item">
        <div className="icon icon--md"><FontAwesomeIcon icon='wrench'/></div>
        <div className="services__text text">
          <h3>Advanced Lawn Care</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?</p>
        </div>
      </div>

    </div>
  </section>
)

export default Services