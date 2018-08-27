import { createModel } from '../model';
import { createActions } from '../actions';
import { state } from '../state';
import { headerView } from '../view/header';

export const header = update => ({
  model: () => ({
    title: 'nearby.me',
    lat: '-1.3243243423',
    long: '0.5435435344',
    city: 'Virar, Maharastra, India'
  }),

  view: headerView(createActions(createModel(update))),

  state
});
