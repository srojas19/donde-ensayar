import React, { Component } from 'react';
import { compose, withStateHandlers } from "recompose";
import {
  Marker,
  InfoWindow,
} from "react-google-maps";

const PlaceMarker = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  })
)(props =>
    <Marker
      position={{ lat: props.place.lat, lng: props.place.lng }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
    <p>
        <strong>Nombre: </strong> {props.place.nombre}
        <br/>
        <strong>Direccion: </strong> {props.place.direccion}
        <br/>
        <strong>Precio: </strong> ${props.place.precio}
    </p>
      </InfoWindow>}
    </Marker>
);

export default PlaceMarker;
