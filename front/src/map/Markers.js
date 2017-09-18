import React, { Component } from 'react';
import PlaceMarker from './PlaceMarker.js';

class Markers extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        this.props.places.map((place)=>
        <PlaceMarker place={place} />)
    );
  }
}

export default Markers;
