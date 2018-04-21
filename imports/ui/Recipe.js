import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { Recipes } from '../api/recipes.js';

export default class Recipe extends Component {

	delete() {
	    Meteor.call('recipes.remove', this.props.recipe._id);
	}

	togglePrivate() {
		Meteor.call('recipes.setPrivate', this.props.recipe._id, ! this.props.recipe.private);
	}

	render() {
		const recipeClassName = classnames({
			private: this.props.recipe.private,
		});

		return (
			<li>
				<button className="delete" onClick={this.delete.bind(this)}>
					&times;
				</button>

		        { this.props.showPrivateButton ? (
		          <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
		            { this.props.recipe.private ? 'Private' : 'Public' }
		          </button>
		        ) : ''}


				<span className="text">
					{this.props.recipe.text} by <strong>{this.props.recipe.username}</strong>
				</span>
			</li>
		);
	}
}