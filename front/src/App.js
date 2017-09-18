import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './map/Map.js';
import NavBar from './NavBar.js';
import SearchBar from './sidebar/SearchBar.js';
import PlaceList from './sidebar/PlaceList.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places : [{ lat: 4.71, lng: -74.07 }]
    };
  }

  // componentDidMount(){
  //   fetch('/places', {method:'GET', headers:{accept: 'application/json' }})
  //   .then((res)=>{
  //     if(res.ok) res.json();
  //   })
  //   .then((places)=>{
  //     this.setState({places: places});
  //   });
  // }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <Map places={this.state.places}/>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <SearchBar />
              </div>
              <div className="row">
                <PlaceList places={this.state.places} />
              </div>
            </div>
          </div>   
        </div>          
      </div>
    );
  }
}

export default App;
