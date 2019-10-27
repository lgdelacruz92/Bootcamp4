import React from 'react';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import MapBoxCredential from '../MapBoxCredential';
import { easeCubic } from 'd3-ease';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import './BuildingInfo.css';

import MAP_STYLE from '../map-style-basic-v8.json';

const BuildingInfo = props => {
  const buildingCoordinates = props.buildingInfo.coordinates;
  const latitude = buildingCoordinates ? buildingCoordinates.latitude : null;
  const longitude = buildingCoordinates ? buildingCoordinates.longitude : null;

  const [state, setState] = React.useState(() => {
    return {
      viewport: {
        width: 800,
        height: 600,
        latitude: 0,
        longitude: 0,
        zoom: 15,
      }
    }
  });

  React.useEffect(() => {

    setState(s => (
      {
      viewport: {
        ...s.viewport,
        latitude: latitude ? latitude : 0,
        longitude: longitude ? longitude : 0,
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic
      },

      }));
  }, [latitude, longitude]);

  return <div>
    {
      !latitude ? 
        <div><i>There is no geo coordinates for this building</i></div> :
        <div className="building-info">
          <div className="text-info">
            <h3>{props.buildingInfo.name}</h3>
            <p className="code">Code: {props.buildingInfo.code}</p>
            <p>Address: {props.buildingInfo.address}</p>
          </div>
          <div
            className="react-mapbox"
            >
            <ReactMapGL
              mapStyle={MAP_STYLE}
              mapboxApiAccessToken={MapBoxCredential.accessToken}
              {...state.viewport}
              onViewportChange={(viewport) => setState({viewport})}
              >
                <Marker latitude={latitude ? latitude : 0} longitude={longitude ? longitude : 0}>
                  <FontAwesomeIcon icon={faMapPin} color="red" />
                </Marker>
            </ReactMapGL>
          </div>


        </div>

    }


  </div>;
}

export default BuildingInfo;