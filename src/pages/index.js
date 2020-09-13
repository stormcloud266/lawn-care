import React from "react"
// import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Header from "../components/Header"
import Services from "../components/Services"
import Gallery from "../components/Gallery"
import Testimonials from "../components/Testimonials"
import CTABanner from "../components/CTABanner"
import Form from "../components/Form"

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>

    <Header />

    <section className="intro section wrapper">
      <div className="intro__video-container">
        <iframe
          src="https://www.youtube.com/embed/Yt5zu5Q5s2s?start=179"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="intro__text text">
        <h2>Helping You Make Your Neighbors Jealous</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta
          rem obcaecati quis officiis, sed et nesciunt, enim animi nostrum, aut
          amet ipsam ab hic tempore culpa quod nisi deserunt.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={["far", "check-circle"]} />
            Get professional results
          </li>
          <li>
            <FontAwesomeIcon icon={["far", "check-circle"]} />
            Save your time
          </li>
          <li>
            <FontAwesomeIcon icon={["far", "check-circle"]} />
            Enjoy your summer
          </li>
        </ul>
      </div>
    </section>

    <Services />

    <CTABanner />

    <Gallery data={data} />

    <Testimonials />
    <Form />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    grid1: file(name: { eq: "grid1" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grid2: file(name: { eq: "grid2" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grid3: file(name: { eq: "grid3" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grid4: file(name: { eq: "grid4" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grid5: file(name: { eq: "grid5" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grid6: file(name: { eq: "grid6" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grid7: file(name: { eq: "grid7" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grid8: file(name: { eq: "grid8" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
