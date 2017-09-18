import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { compose, withProps, withState, withHandlers } from "recompose";
import Markers from './Markers.js';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '600px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withState('zoom', 'onZoomChange', 11),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultCenter={{ lat: 4.7110, lng: -74.0721 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    <Markers places={props.places} />
  </GoogleMap>
);

Map.propTypes = {
  places: PropTypes.array.isRequired,
};
export default Map;

