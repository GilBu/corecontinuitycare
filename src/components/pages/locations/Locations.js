import React from 'react';
import ReactDOM from "react-dom";
import {imagesList} from './images.js'
import './styles.css'

function Locations() {
  const produceImageWidgets = () => {
    return imagesList.map(img => {
      return (
        <div className="responsive">
          <div className="responsive">
            <div className="gallery">
              <a href={img.placeID} target= "_blank"> <img src={img.image} alt={img.name}/></a>
              <div>{img.name}</div>
              <div>{img.address}</div>
              <div><i class="fa">&#xf095;</i> {img.phone}</div>
              <div><i class="fa">&#xf1ac;</i> {img.fax}</div>
            </div>
          </div>
        </div>
      )
    });
  }
  return (
    <React.Fragment>
      <div className="locations">
         <h1>Locations</h1>
         <div className="location-info">
          {produceImageWidgets()}
         </div>
       </div>
    </React.Fragment>
  )
}

export default Locations;
