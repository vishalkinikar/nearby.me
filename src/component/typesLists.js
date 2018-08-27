import { createModel } from '../model';
import { createActions } from '../actions';
import { state } from '../state';
import { typesListsView } from '../view/typesLists';

import * as FW from '@fortawesome/free-solid-svg-icons';

const types = ['all', 'atm','airport','bank','bus_station','hospital','local_government_office','pharmacy','train_station'];
const names = ['All', 'ATM', 'Airport', 'Bank', 'Bus station', 'Hospital', 'Local Government Office', 'Pharmacy', 'Train Station'];
const icons = [FW.faMap, FW.faPiggyBank, FW.faPlane, FW.faRupeeSign, FW.faBus, FW.faHospital, FW.faBuilding, FW.faBriefcaseMedical, FW.faTrain];

const modelData = types.reduce((obj, type, index) => {
  return Object.assign(obj, {
    [type]: {
      name: names[index],
      icon: icons[index],
      isActive: type === 'all'
    }
  });
}, {});

export const typesLists = update => ({
  model: () => (modelData),

  view: typesListsView(createActions(createModel(update))),

  state
});
