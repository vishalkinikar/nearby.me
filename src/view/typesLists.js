import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EventHandler } from '../actions/EventHandler';

export const typesListsView = actions => {
  
  const updateData = e => {
    let type = e.target.getAttribute('data-type');
    EventHandler.publish('searchNearby', [type]);
    actions.activeLeftLink(type);
  }
  return model => (
    <ul className="typesLists">
      {
        Object.keys(model).map(type => {
          return <li key={type} onClick={updateData.bind(type)} className={model[type].isActive ? 'isActive' : ''} data-type={type}>
            <span className="iconDisplay"><FontAwesomeIcon icon={model[type].icon} /></span>
            {model[type].name}
          </li>
        })
      }
    </ul>
  )
}