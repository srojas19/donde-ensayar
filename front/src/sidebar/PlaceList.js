import React, { Component } from 'react';
import ListItem from './ListItem.js';

class PlaceList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.places.map((p,i)=>{
        return <ListItem place={p} key={i} />
    });
}

  render() {
    return (
      <div>
        <h4>Lugares</h4>
        <div className="list-group">
          {this.renderList()}
        </div>
      </div>
      
    );
  }
}

export default PlaceList;
