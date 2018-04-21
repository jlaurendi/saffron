import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Recipes extends Component {
    getRecipes(){
        return [
            { _id: 1, text: 'Three Cup Chicken' },
            { _id: 2, text: 'Tomoto Eggs' },
            { _id: 3, text: 'Green Bean Casserole' },
        ];
    }

    renderRecipes() {
        return this.getRecipes().map((recipe) => (
            <li className="recipe-item" key={recipe._id}>{recipe.text}</li>
        ));
    }

    render() {
        return (
            <div>
                <h1>Recipe Books</h1>
                <ul>
                    {this.renderRecipes()}
                </ul>
            </div>
        );
    }
}