/* global id */

import React, { Component } from 'react';

import TopMenu from './TopMenu.js';
import Recipes from './Recipes.js';
import Task from './Task.js';

// App component - represents the whole app
export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 1
        };
    }

    render() {
        return (
            <div className="container">
                <header>
                    <TopMenu selectedTab={this.state.selectedTab} />
                </header>
                <div className="content-wrapper">
                    <Recipes />
                </div>
            </div>
        );
    }
}