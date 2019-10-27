import React from 'react';

class ViewBuilding extends React.Component {

	render() {

		const { data } = this.props;
		const { selectedBuilding } = this.props.appState;
		const building = data.filter(directory => directory.id === selectedBuilding);

		return (
			<div>
				<p>
					{ building.map(b => <div>{b.address}</div>) }
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
