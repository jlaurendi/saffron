import React, { Component } from 'react';

export default class TopMenu extends Component {
	constructor(props) {
        super(props);

        this.state = {
            selectedTab: this.props.selectedTab
        };
    }

	getMenuLists(){
        return [
            { _id: 1, text: 'Home' },
            { _id: 2, text: 'Recipe Books' },
            { _id: 3, text: 'Today\'s Menu' },
        ];
    }

    renderMenuLists(){
		return this.getMenuLists().map((list) => (
	        <li className="list-item" key={list._id} onClick={this.setTab}><a>{list.text}</a></li>
		));
	}

	setTab(e) {
		let id = e.target.key;
		alert(id);
	}

	render() {
	    return (
			<div id="top-menu">
				<li className="logo">Saffron</li>
				{this.renderMenuLists()}
				{this.state.selectedTab}
	     	</div>
	    );
	 }
}
