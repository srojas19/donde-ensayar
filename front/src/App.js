import React, { Component } from 'react';
import Map from './map/Map.js';
import NavBar from './NavBar.js';
import SearchBar from './sidebar/SearchBar.js';
import PlaceList from './sidebar/PlaceList.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
  }

  componentDidMount(){
    fetch('/api/places', {method:'GET', headers:{accept: 'application/json' }})
    .then((res)=>{
      if(res.ok) return res.json();
    })
    .then((places)=>{
      console.log(places);
      this.setState({places: places});
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <Map places={this.state.places}/>
            </div>
            <div className="col-lg-3 ">
              <br/>
              <div className="row">
                <SearchBar />
              </div>
              <br/>
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
