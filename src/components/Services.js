import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Services = () => (
  <section className="services section bg-1">
    <div className="services__title text wrapper">
      <h2>Check out All These Things We Can Do</h2>
    </div>

    <div className="services__list wrapper">
      <div className="services__item">
        <div className="icon icon--md icon--square">
          <FontAwesomeIcon icon="drafting-compass" />
        </div>
        <div className="services__text text">
          <h3>Advanced Lawn Care</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            molestias dolor reprehenderit corrupti quos?
          </p>
        </div>
      </div>

      <div className="services__item">
        <div className="icon icon--md icon--square">
          <FontAwesomeIcon icon="tree" />
        </div>
        <div className="services__text text">
          <h3>Advanced Lawn Care</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            molestias dolor reprehenderit corrupti quos?
          </p>
        </div>
      </div>

      <div className="services__item">
        <div className="icon icon--md icon--square">
          <FontAwesomeIcon icon="leaf" />
        </div>
        <div className="services__text text">
          <h3>Advanced Lawn Care</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            molestias dolor reprehenderit corrupti quos?
          </p>
        </div>
      </div>

      <div className="services__item">
        <div className="icon icon--md icon--square">
          <FontAwesomeIcon icon="wrench" />
        </div>
        <div className="services__text text">
          <h3>Advanced Lawn Care</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            molestias dolor reprehenderit corrupti quos?
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Services
