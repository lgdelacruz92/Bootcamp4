import React from 'react';
import Expandable from '../widgets/Expandable';
import AddBuildingForm from './AddBuildingForm';
import Search from './Search';
import './BuildingList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class BuilingList extends React.Component {
	constructor(props) {
		super(props);
		this.buildingClick = this.buildingClick.bind(this);
		this.handleAddBuildingClick = this.handleAddBuildingClick.bind(this);
		this.onHide = this.onHide.bind(this);
		this.handleRemove = this.handleRemove.bind(this);

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

	handleRemove(directory) {
		const index = this.props.data.indexOf(directory);
		if (index > -1) {
			this.props.data.splice(index, 1);
		}
	}

	render() {
		let { data } = this.props;
		const { filterText } = this.props.appState;
		data = data.filter(data => data.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0);

		const buildingList = data.map(directory => {
			return (
				<tr onClick={() => this.buildingClick(directory)} key={directory.id}>
					<td className="uppercase">{directory.code} </td>
					<td> {directory.name} </td>
					<td>
						<div 
							className="button-contained" 
							onClick={() => this.handleRemove(directory)}>
								<FontAwesomeIcon icon={faTrashAlt}/>
						</div>
					</td>
				</tr>
			);
		});

		return <div>
			<table className="table table-striped table-hover">
				<tbody>
					<tr>
						<td colSpan="3">
							<b className="title">Code Building</b>
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
						</td>
					</tr>
					<tr>
						<td colSpan="3">
							<Search update={this.props.searchUpdate}/>
						</td>
					</tr>
					{buildingList}
				</tbody>
			</table>

		</div>;
	}
}
export default BuilingList;
