import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EventHandler } from '../actions/EventHandler';

export const typesListsView = actions => {
  
  const updateData = e => {
    let type = e.target.getAttribute('data-type');
    EventHandler.publish('searchNearby', [type]);
    actions.activeLeftLink(type);
  }

  EventHandler.subscribe('showHideLeftNav', actions.showHideLeftNav);
  
  return model => (
    <div className={`leftSide ${model.isActiveLeftNav ? 'isMenuActive' : false}`}>
      <h2 className="placesTypes">Types</h2>
      <ul className="typesLists">
        {
          Object.keys(model).map(type => {
            if(type === 'isActiveLeftNav') return false;
            return <li key={type} onClick={updateData.bind(type)} className={model[type].isActive ? 'isActive' : ''} data-type={type}>
              <span className="iconDisplay"><FontAwesomeIcon icon={model[type].icon} /></span>
              {model[type].name}
            </li>
          })
        }
      </ul>
    </div>
  )
}