import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Recipes } from '../api/recipes.js';
import Recipe from './Recipe.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import TopMenu from './TopMenu.js';
import TodaysMenu from './TodaysMenu.js';
import RecipesBook from './RecipesBook.js';


// App component - represents the whole app
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 1
        };
    }

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

    Meteor.call('recipes.insert', text);

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderRecipes() {
    let filteredRecipes = this.props.recipes;
    return filteredRecipes.map((recipe) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = recipe.owner == currentUserId;

      return (
        <Recipe
          key={recipe._id}
          recipe={recipe}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <header>
            <TopMenu selectedTab={this.state.selectedTab} />
        </header>

        <AccountsUIWrapper />
        <TodaysMenu />
        <RecipesBook />

        { this.props.currentUser ?
          <form className="new-recipe" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new recipes"
            />
          </form> : ''
        }

        <ul>
          {this.renderRecipes()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('recipes');

  return {
    recipes: Recipes.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(App);