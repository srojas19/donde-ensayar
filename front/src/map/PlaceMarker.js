import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class PlaceMarker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Marker
        position={{ lat: 4.71, lng: -74.07 }}
        onClick={this.props.onToggleOpen}>
            <InfoWindow onCloseClick={this.props.onToggleOpen}>
            <div>
                {" "} test
            </div>
            </InfoWindow>
        </Marker>
    );
  }
}

export default PlaceMarker;
