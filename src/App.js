import React from 'react';
import { nest } from './utils';
import * as Component from './component'; 

const CreateAppView = update => {
  const header = nest(Component.header, update, 'header');
  const typesLists = nest(Component.typesLists, update, 'typesLists');
  const placesLists = nest(Component.placesLists, update, 'placesLists');

  const model = () => Object.assign(
    header.model(), 
    typesLists.model(), 
    placesLists.model()
  );

  const view = model => (
    <div className="mainDiv">
      {header.view(model)}
      <div className="container">
        {typesLists.view(model)}
        <div className="RightArea">
          <div className="MainContainer">
            {placesLists.view(model)}
          </div>
        </div>
      </div>
    </div>
  );

  const state = model =>
    Object.assign(
      {}, 
      header.state(model), 
      typesLists.state(model), 
      placesLists.state(model)
    );

  return { model, view, state };
};

export const createApp = update => {
  return nest(CreateAppView, update, 'nearme');
};


