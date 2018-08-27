export const createActions = Model => ({
  getUserLocation: () => Model.present({ getUserLocation: true }),
  onMapReady: (mapProps, map) => Model.present({ onMapReady: { mapProps, map } }),
  searchNearby: types => Model.present({ searchNearby: types }),
  activeLeftLink: name => Model.present({ activeLeftLink: name }),
});