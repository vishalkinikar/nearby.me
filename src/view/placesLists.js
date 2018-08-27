import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FW from '@fortawesome/free-solid-svg-icons';
import {Map} from 'google-maps-react';
import StarRatingComponent from 'react-star-rating-component';

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
      {console.log(model)}
      {(model) ? Object.keys(model).map((placeID, index) => 
        <article className="PlaceBox" key={index}>
        <div className="PlaceBox__Left">
          <figure className="image">
            <img src={model[placeID].icon} alt="" />
          </figure>
        </div>
        <div className="PlaceBox__Content">
          <p className="PlaceBox__Title">{model[placeID].name}</p>
          <p className="PlaceBox__Address">{model[placeID].vicinity}</p>
          <p className="PlaceBox__Dist">
            <StarRatingComponent 
              name={model[placeID].id} 
              editing={false}
              starCount={5}
              value={model[placeID].rating}
            />

            Open > {model[placeID].opening_hours.open_now ? 'Open' : 'Closed'}
          </p>
        </div>
      </article>
      ): 'loading...'}
    </div>
  )
};