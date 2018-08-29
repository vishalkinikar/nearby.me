import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FW from '@fortawesome/free-solid-svg-icons';
import { EventHandler } from '../actions/EventHandler';

export const headerView = actions => {
  actions.getUserLocation();
  return model => (
    <div className="Header">
      <div className="MenuIcon" onClick={e => EventHandler.publish('showHideLeftNav')}>
        <FontAwesomeIcon icon={FW.faBars} />
      </div>
      <h1 className="Header__Title">{model.title}</h1>
      <div className="Header__UserDetails">
        <p className="Header__CityName">
          <span className="iconDisplay"><FontAwesomeIcon icon={FW.faLocationArrow} /> </span>
          {model.address}
        </p>
        <p className="Header__Location">
          <span className="iconDisplay"><FontAwesomeIcon icon={FW.faMapMarked} /> </span>
          Lat.: {model.lat} lng.: {model.lng}</p>
      </div>
    </div>
  )
}