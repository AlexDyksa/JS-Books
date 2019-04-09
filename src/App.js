import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Sidenav from './components/Sidenav';

import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

class App extends Component {
    render() {
        const topics = this.props.topics;

        return (
            <BrowserRouter>
                <div className="app">
                    <div className="app-header">
                        <Logo />
                        <Navigation />
                    </div>

                    <div className="app-content">
                        <Route exact path="/books" render={props => <Sidenav topics={topics} {...props} />}
                        />

                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/books" component={Books} />
                            <Route path="/contacts" component={Contacts} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
