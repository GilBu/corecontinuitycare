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
              <div>Phone: {img.phone}</div>
              <div>Fax: {img.fax}</div>
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
         <div>
          {produceImageWidgets()}
         </div>
       </div>
    </React.Fragment>
  )
}

const testStyle = {
  width: '50px'
}

export default Locations;
