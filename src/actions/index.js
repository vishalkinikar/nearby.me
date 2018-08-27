export const createActions = Model => ({
  getUserLocation: () => Model.present({ getUserLocation: true }),
  onMapReady: (mapProps, map) => Model.present({ onMapReady: { mapProps, map } }),
});