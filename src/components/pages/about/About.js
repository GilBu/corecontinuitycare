import React from 'react'
import {imagesList} from './images.js'
import Bio from './bio.js'
import './styles.css'
import ContactUs from '../contactUs/ContactUs';

function About() {

  const bio = (selected) => {
    let selectedBio = imagesList[selected]
    return (
      <div>
        <div>
          <img className='bio-image' src={image} alt={name}/>
          <h3>
            {selectedBio.name}
          </h3>
          <h4>
            {selectedBio.title}
          </h4>
        </div>
        {selectedBio.bio}
      </div>
    )
  }

  const produceImageWidgets = () => {
    return imagesList.map(img => {
      return (
        <div className="responsive">
          <div className="gallery">
            <img src={img.image} alt={img.name}/>
            <div>{img.name}</div>
            <div dir='ltr'>{img.title}</div>
          </div>
        </div>
      )
    });
  }
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
          {produceImageWidgets()}
        </div>
        <div>
          {bio(selected)}
        </div>
        <Bio />
      </div>
      <ContactUs />
    </React.Fragment>
  )
}

export default About;
