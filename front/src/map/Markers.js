import React, { Component } from 'react';
import PlaceMarker from './PlaceMarker.js';


class Markers extends Component {
  constructor(props) {
    super(props);
  }

  renderMarkers() {
      return this.props.places.map((p,i)=>{
          return <PlaceMarker place={p} key={i}/>
      });
  }

  render() {
    return (
        <div>{this.renderMarkers()}</div>
    );
  }
}

export default Markers;
