import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Recipes } from '../api/recipes.js';
import Recipe from './Recipe.js';

// App component - represents the whole app
class App extends Component {
  getRecipes() {
    return [
      { _id: 1, text: 'This is recipe 1' },
      { _id: 2, text: 'This is recipe 2' },
      { _id: 3, text: 'This is recipe 3' },
    ];
  }

  handleSubmit(event) {
    event.preventDefault();

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Recipes.insert({
      text,
      createdAt: new Date(),
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderRecipes() {
    return this.props.recipes.map((recipe) => (
      <Recipe key={recipe._id} recipe={recipe} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Recipe List</h1>
        </header>

        <form className="new-recipe" onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add new recipes"
          />
        </form>

        <ul>
          {this.renderRecipes()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    recipes: Recipes.find({}).fetch(),
  };
})(App);
