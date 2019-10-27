import React from 'react';
import Expandable from '../widgets/Expandable';
import AddBuildingForm from './AddBuildingForm';

class BuilingList extends React.Component {
	constructor(props) {
		super(props);
		this.buildingClick = this.buildingClick.bind(this);
		this.handleAddBuildingClick = this.handleAddBuildingClick.bind(this);
		this.onHide = this.onHide.bind(this);

		this.state = {
			addSomething: false
		};
		this.addRef = React.createRef();
	}

	onHide() {
		this.setState({ addSomething: false });
	}	

	handleAddBuildingClick() {
		this.setState({ addSomething: true });
	}

	buildingClick(directory) {
		this.props.onBuildingClick(directory.id);
	}

	render() {
		//console.log('This is my directory file', this.props.data);
		let { data } = this.props;
		const { filterText } = this.props.appState;
		data = data.filter(data => data.name.indexOf(filterText) >= 0);

		const buildingList = data.map(directory => {
			return (
				<tr onClick={() => this.buildingClick(directory)} key={directory.id}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>
			<div ref={this.addRef}>
				<button 
					onClick={this.handleAddBuildingClick} 
					className="btn btn-primary">Add a building</button>
				<Expandable
					btnRef={this.addRef}
					onHide={this.onHide}
					expanded={this.state.addSomething}>
					<AddBuildingForm data={this.props.data} onHide={this.onHide}/>
				</Expandable>
			</div>

			{buildingList}
		</div>;
	}
}
export default BuilingList;