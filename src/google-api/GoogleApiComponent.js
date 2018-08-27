import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

import { getLocation } from './GeoLocation';

export class MapContainer extends React.Component {

  onMapReady = (mapProps, map) => this.searchNearby(map, map.center);

  searchNearby = (map, center) => {
    const { google } = this.props;
    getLocation().then( ( { coords: {latitude, longitude} } ) => {
      const request = {
        location: {
          lat: latitude,
          lng: longitude
        },
        radius: '1500',
        type: ['all', 'atm','airport','bank','bus_station','hospital','local_government_office','pharmacy','train_station']
      };


      const service = new google.maps.places.PlacesService(map);
  
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK)
          this.props.update(model => {
            model.placesLists = results;
            return model;
          });
      });
    });
  };

  render() {
    return (
        <Map
            className="map"
            google={this.props.google}
            onReady={this.onMapReady}
            visible={false} >
      </Map>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAomiCzQBvNB87A4WkSgulXgbIIWZXESf4')
})(MapContainer)
