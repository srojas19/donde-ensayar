import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex w-100 justify-content-between list-group-item list-group-item-action flex-column align-items-start">
        <h5 className="mb-1">{this.props.place.nombre}</h5>
        <p className="mb-1">
          <strong>Nombre: </strong> {this.props.place.nombre}
          <br/>
          <strong>Direccion: </strong> {this.props.place.direccion}
          <br/>
          <strong>Precio: </strong> ${this.props.place.precio}
        </p>
      </div>
    );
  }
}

export default ListItem;
