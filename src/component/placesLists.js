import { createModel } from '../model';
import { createActions } from '../actions';
import { state } from '../state';
import { placesListsView } from '../view/placesLists';

export const placesLists = update => ({
  model: () => ( {} ),

  view: placesListsView(createActions(createModel(update))),

  state
});

