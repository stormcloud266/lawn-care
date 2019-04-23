import React from "react"
import PropTypes from "prop-types"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft, faMapMarkerAlt, faMobileAlt, faLeaf, faWrench, faTree, faDraftingCompass } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle, faEnvelope, } from '@fortawesome/free-regular-svg-icons'


import Nav from './Nav'
import Footer from './Footer'
import "../styles/styles.scss"

library.add(fab, faCheckCircle, faQuoteLeft, faMapMarkerAlt, faMobileAlt, faEnvelope, faLeaf, faWrench, faTree, faDraftingCompass)


const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
