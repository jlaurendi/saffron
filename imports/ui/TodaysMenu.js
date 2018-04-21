import React, { Component } from 'react';

// Task component - represents a single todo item
export default class TodaysMenu extends Component {
    
    renderSearchBar() {
        return (
            <div>Search Bar</div>
        );

    }

    renderRecipesFound(){
        return(
            <select>Possible Options
                <option value="option-1">Option 1</option>
                <option value="option-2">Option 2</option>
                <option value="option-3">Option 3</option>
            </select>
        );
    }

    render() {
        return (
            <div>
                <h1>Today's Menu</h1>
                {this.renderSearchBar()}
                {this.renderRecipesFound()}
            </div>
        );
    }
}