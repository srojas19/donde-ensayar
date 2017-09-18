import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" name="Busqueda" id="searchbox" placeholder='busqueda por nombre'/>
      </div>
    );
  }
}

export default SearchBar;
