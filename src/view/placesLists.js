import React from 'react';
import {Map} from 'google-maps-react';
import StarRatingComponent from 'react-star-rating-component';
import { EventHandler } from '../actions/EventHandler';

export const placesListsView = actions => {
  EventHandler.subscribe('searchNearby', actions.searchNearby);
  return model => (
    <div className="PlacesLists">
      <Map
          className="map"
          google={window.google}
          centerAroundCurrentLocation
          onReady={actions.onMapReady}
          visible={false} >
      </Map>
      {
        (model.status) ?
          (model.status === 'ZERO_RESULTS' ) ? <div className="DefaultMsgDiv">'{model.types[0]}' not found in your current location!</div> : <div className="ErrorDiv">Error: {model.status}</div>
          :
          (model) ? Object.keys(model).map((placeID, index) => 
            <article className="PlaceBox" key={index}>
              <div className="PlaceBoxWarp">
                <div className="PlaceBox__Left">
                  <figure className="image">
                    <img src={model[placeID].icon} alt="" />
                  </figure>
                </div>
                <div className="PlaceBox__Content">
                  <p className="PlaceBox__Title">{model[placeID].name}</p>
                  <p className="PlaceBox__Address">{model[placeID].vicinity}</p>
                </div>
              </div>
              <div className="PlaceBox__Footer">
                  <div className="PlaceBox__FooterText">
                    {
                      model[placeID].opening_hours ? model[placeID].opening_hours.open_now ? 'Open right now' : 'Closed' : ''
                    }
                </div>
                <StarRatingComponent 
                    name={model[placeID].id} 
                    editing={false}
                    starCount={5}
                    value={model[placeID].rating}
                  />
              </div>
            </article>
          ): 'loading...'
      }
    </div>
  )
};