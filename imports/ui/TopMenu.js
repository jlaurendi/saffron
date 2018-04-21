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
	        <li className="list-item" key={list._id} data-id={list._id} onClick={this.setTab}><a>{list.text}</a></li>
		));
	}

	setTab() {
		let id = event.target.getAttribute('data-id');
		alert(id);
	}

	render() {
	    return (
			<div id="top-menu">
				<a className="logo">Saffron</a>
				<ul className="menu">
					{this.renderMenuLists()}
				</ul>
				{this.state.selectedTab}
	     	</div>
	    );
	 }
}
