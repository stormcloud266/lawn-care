import React from "react"
import Img from "gatsby-image"

class Gallery extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.closeModal)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.closeModal)
  }

  imagesArray = Object.keys(this.props.data).map(key => this.props.data[key])

  closeModal = () => {
    const modalIsOpen = document
      .getElementById("modal")
      .classList.contains("modal-opened")
    if (modalIsOpen) {
      document.getElementById("modal").classList.remove("modal-opened")
      document.getElementById("modal-img").src = ""
    }
  }
  openModal = src => {
    document.getElementById("modal-img").src = src
    document.getElementById("modal").classList.add("modal-opened")
  }

  render() {
    return (
      <section className="gallery" id="gallery">
        <div id="modal" className="" onClick={this.closeModal}>
          <img id="modal-img" src="" alt="" />
          <p>Close</p>
        </div>
        <h2 className="gallery__title">Gallery</h2>

        <div className="gallery__grid-container wrapper">
          {this.imagesArray.map((image, ind) => (
            <div
              onClick={e => this.openModal(e.target.src)}
              className="gallery__image"
              key={ind}
            >
              <Img sizes={image.childImageSharp.fluid} />
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default Gallery
