import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Búsqueda</h4>
        <div className="input-group">
          <input type="text" id='nombre' className="form-control form-control-sm" placeholder="Nombre" aria-label="Nombre"/>
        </div>
        <br/>
        <div className="input-group">
          <br/>
          <input type="number" id='minimo' className="form-control form-control-sm" placeholder="Mínimo" aria-label="Tarifa minima (to the nearest dollar)"/> 
          <input type="number" id='maximo' className="form-control form-control-sm" placeholder="Máximo" aria-label="Tarifa maxima (to the nearest dollar)"/>
        </div>  
      </div>
      
    );
  }
}

export default SearchBar;
