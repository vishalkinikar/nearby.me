import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const typesListsView = actions => {
  return model => (
    <ul className="typesLists">
      {
        Object.keys(model).map(type => {
          return <li key={type} className={model[type].isActive ? 'isActive' : ''} data-type={type}>
            <span className="iconDisplay"><FontAwesomeIcon icon={model[type].icon} /></span>
            {model[type].name}
          </li>
        })
      }
    </ul>
  )
}