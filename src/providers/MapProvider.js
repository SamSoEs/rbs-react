import React from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import axios from 'axios';

const { createContext, useContext } = React;

const MapContext = createContext(null);

export const MapProvider = ({children, apiKey}) => {

  const initMap = () => {
    const map = tt.map({
      key: apiKey,
      container: 'bwm-map',
      zoom: 15,
      scrollZoom: false
    });

    map.addControl(new tt.NavigationControl());
    return map;
  }
  const setCenter = (map, position) => {
    map.setCenter(new tt.LngLat(position.lon, position.lat))
  }
  const addMarker = (map, position) => {

    const markerDiv = document.createElement('div');
    markerDiv.className = 'bwm-marker';

    new tt.Marker({
      element: markerDiv
    })
      .setLngLat([position.lon, position.lat])
      .addTo(map)
  }

  const addPopupMessage = (map, message) => {
    new tt.Popup({className: 'bwm-popup', closeButton: false, closeOnClick: false})
      .setLngLat(new tt.LngLat(0,0))
      .setHTML(`<p>${message}</p>`)
      .addTo(map)
  }

  const requestGeoLocation = location => {
    return axios
      .get(`https://api.tomtom.com/search/2/geocode/${location}.JSON?key=${apiKey}`)
      .then(res => res.data)
      .then(tomRes => {
        const results = tomRes.results;
        if (results && results.length > 0) {
          const { position } = results[0];
          return position;
        }

        return Promise.reject('Location not found!');
      }).catch(() =>  Promise.reject('Location not found!'))
  }

  const mapApi = {
    initMap, requestGeoLocation, setCenter, addMarker, addPopupMessage
  }

  return (
    <MapContext.Provider value={mapApi}>
      {children}
    </MapContext.Provider>
  )
}

export const useMap = () => {
  return useContext(MapContext);
}