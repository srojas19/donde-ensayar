import React, { Component } from 'react';
import Map from './map/Map.js';
import NavBar from './NavBar.js';
import SearchBar from './sidebar/SearchBar.js';
import PlaceList from './sidebar/PlaceList.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places : [
        {
          nombre: "The Hall Of Rock",
          direccion: "Calle 67 # 11-38",
          telefono: "7020261",
          precio: "32000",
          lat: 4.653191,
          lng: -74.062045
        },
        {
          nombre: "The Hall Of Rock 2",
          direccion: "Calle 67 # 11-38",
          telefono: "7020261",
          precio: "32000",
          lat: 4.6,
          lng: -74.06201
        }
      ]
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
