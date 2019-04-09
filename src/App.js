import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Contacts from './pages/Contacts';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <div className="app-header">
                        <Logo />
                        <Navigation />
                    </div>

                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/books" exact component={Books} />
                    <Route path="/contacts" exact component={Contacts} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
