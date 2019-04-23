import React from "react"
// import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Helmet from 'react-helmet'

import Layout from "../components/layout"
import Header from "../components/Headr"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import CTABanner from "../components/CTABanner"
import Form from "../components/Form"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>

    <Header />

    <section className="intro section wrapper">
      <div className="intro__image-container">
        <img src="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
      </div>

      {/* <div className="intro__video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Yt5zu5Q5s2s?start=179" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> */}

      <div className="intro__text text">
        <h2>Helping You Make Your Neighbors Jealous</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta rem obcaecati quis officiis, sed et nesciunt, enim animi nostrum, aut amet ipsam ab hic tempore culpa quod nisi deserunt.</p>
        <div>
        <ul>
          <li><FontAwesomeIcon icon={['far', 'check-circle']} />Stop wasting</li>
          <li><FontAwesomeIcon icon={['far', 'check-circle']} />Stop wasting time on yard maintenance</li>
          <li><FontAwesomeIcon icon={['far', 'check-circle']} />Stop wasting time on yard maintenance</li>
          <li><FontAwesomeIcon icon={['far', 'check-circle']} />Stop wasting time</li>
        </ul>
        </div>
      </div>

    </section>

    <Services />
    <CTABanner />
    <section className="intro section wrapper">
      <div className="intro__image-container">
        <img src="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
      </div>

      {/* <div className="intro__video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Yt5zu5Q5s2s?start=179" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> */}

      <div className="intro__text text">
        <h2>Helping You Make Your Neighbors Jealous</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta rem obcaecati quis officiis, sed et nesciunt, enim animi nostrum, aut amet ipsam ab hic tempore culpa quod nisi deserunt.</p>
        <div>
        <ul>
          <li><FontAwesomeIcon icon={['far', 'check-circle']} />Stop wasting</li>
          <li><FontAwesomeIcon icon={['far', 'check-circle']} />Stop wasting time on yard maintenance</li>
          <li><FontAwesomeIcon icon={['far', 'check-circle']} />Stop wasting time on yard maintenance</li>
          <li><FontAwesomeIcon icon={['far', 'check-circle']} />Stop wasting time</li>
        </ul>
        </div>
      </div>

    </section>
    <Testimonials />
    <Form />
  </Layout>
)

export default IndexPage
