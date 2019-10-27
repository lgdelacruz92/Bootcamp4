import React from 'react';
import BuildingInfo from './BuildingInfo';
import './ViewBuilding.css';

class ViewBuilding extends React.Component {

	render() {

		const { data } = this.props;
		const { selectedBuilding } = this.props.appState;
		const building = data.filter(directory => directory.id === selectedBuilding);

		return (
			<div>
				{ building.length > 0 ?
					building.map((b, i) => <BuildingInfo key={i} buildingInfo={b}/>)
					:
					<div><i>Click on a building to see more information</i></div>
				}
			</div>
		);
	}
}
export default ViewBuilding;
