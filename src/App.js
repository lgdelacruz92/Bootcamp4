import React from 'react';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
    this.filterUpdate = this.filterUpdate.bind(this);
    this.selectedUpdate = this.selectedUpdate.bind(this);
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({ filterText: value });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({ selectedBuilding: id });
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">

                  <BuildingList
                    searchUpdate={this.filterUpdate}
                    onBuildingClick={this.selectedUpdate}
                    appState={this.state}
                    data={this.props.data}
                  />
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.props.data} 
                appState={this.state}/>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
