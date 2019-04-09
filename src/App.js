import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <div className="app-header">
                        <Logo />
                        <Navigation />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
