import React from 'react'
import {imagesList} from './images.js'
import './styles.css'
import ContactUs from '../contactUs/ContactUs';

class About extends React.Component {
  state ={selected: 0, display: "none"}

  bio () {
    let selectedBio = imagesList[this.state.selected]
    return (
      <div className='bio-container'>
        <div>
          <img className='bio-image' src={selectedBio.image} alt={selectedBio.name}/>
          <h3>
            {selectedBio.name}
          </h3>
        </div>
        <div className='bio'>
          <h4 className='title'>
            {selectedBio.title}
          </h4>
          {selectedBio.bio}
        </div>
      </div>
    )
  }

  produceImageWidgets () {
    return imagesList.map((img, idx) => {
      return (
        <div className="responsive" key={idx.toString()} >
          <div className="gallery" onClick={() => this.setState({selected: idx, display: "flex"})}>
            <img src={img.image} alt={img.name}/>
            <div>{img.name}</div>
            <div dir='ltr'>{img.title}</div>
          </div>
        </div>
      )
    });
  }

  render () {
    return (
      <React.Fragment>
        <div className= "about-container">
          <h1>About</h1>
          <p className="about">We endeavor to promote and improve the health of individuals in the
          post acute setting through evidence based medical treatment and
          prevention strategies, effective use of data,  advocacy, and
          collaboration.
  
          Our goal is to offer consistent quality care that set the standards
          in skilled nursing facility communities and exceed patients' expectations
          while delivered in a caring, convenient, cost-effective and accessible
          manner. This is exemplified through our belief of creating a culture
          surrounding the core continuity of care for all of our patients,
          creating lasting relationships with partners, and building strong
          connections within the community.</p>
          <h1>Meet the Team</h1>
          <div className="middlethis" dir='rtl'>
            {this.produceImageWidgets()}
          </div>
          <div className='bio-item' style={{display: this.state.display}}>
            {this.bio()}
          </div>
        </div>
        <ContactUs />
      </React.Fragment>
    )
  }
}

export default About;
