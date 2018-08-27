import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FW from '@fortawesome/free-solid-svg-icons';
import {Map} from 'google-maps-react';

export const placesListsView = actions => {
  return model => (
    <div className="PlacesLists">
      <Map
          className="map"
          google={window.google}
          centerAroundCurrentLocation
          onReady={actions.onMapReady}
          visible={false} >
      </Map>
      {(model) ? Object.keys(model).map((placeID, index) => 
        <article className="PlaceBox" key={index}>
        <div className="PlaceBox__Left">
          <figure className="image">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="" />
          </figure>
        </div>
        <div className="PlaceBox__Content">
          <p className="PlaceBox__Title">{model[placeID].name}</p>
          <p className="PlaceBox__Address">502, Ashtavinayak Tower, Virar East Thane</p>
          <p className="PlaceBox__Dist">
            <span className="iconDisplay"><FontAwesomeIcon icon={FW.faMapMarkedAlt} /></span>
            10 KM
          </p>
        </div>
      </article>
      ): 'loading...'}
    </div>
  )
};