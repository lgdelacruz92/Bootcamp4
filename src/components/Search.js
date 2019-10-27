import React from 'react';
import './Search.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.height = 'test';
		this.filterUpdate = this.filterUpdate.bind(this);
	}

	filterUpdate(e) {
		this.props.update(e.currentTarget.value);
	}

	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
				<input type="text" onChange={this.filterUpdate} placeholder="Type to Filter" />
			</form>
		);
	}
}
export default Search;
