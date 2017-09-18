import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand font-weight-bold" href="#">Donde Ensayar</a>
      </nav>
    );
  }
}

export default NavBar;
