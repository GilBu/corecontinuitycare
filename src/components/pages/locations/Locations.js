import React from 'react';
import {imagesList} from './images.js'
import './styles.css'
import ContactUs from '../contactUs/ContactUs';

function Locations() {
  const produceImageWidgets = () => {
    return imagesList.map(img => {
      return (
          <div className="location">
            <div className="gallery">
              <a href={img.placeID} target= "_blank"> <img src={img.image} alt={img.name}/></a>
              <div>{img.name}</div>
              <div>{img.address}</div>
              <div><i class="fa">&#xf095;</i> {img.phone}</div>
              <div><i class="fa">&#xf1ac;</i> {img.fax}</div>
            </div>
          </div>
      )
    });
  }
  return (
    <React.Fragment>
      <div className="locations-container">
         <h1>Locations</h1>
         <div className="locations-info">
          {produceImageWidgets()}
         </div>
      </div>
      <ContactUs />
    </React.Fragment>
  )
}

export default Locations;
