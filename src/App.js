import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Sidenav from './components/Sidenav';

import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Book from './pages/Book';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

class App extends Component {
    render() {
        const topics = this.props.topics;
        const books = this.props.books;

        return (
            <BrowserRouter>
                <div className="app">
                    <div className="app-header">
                        <Logo />
                        <Navigation />
                    </div>

                    <div className="app-content">
                        <Route path="/books" render={() => <Sidenav topics={topics} />}
                        />

                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/books/:topic?" exact render={props => <Books {...props} books={books} />} />
                            <Route path="/books/:topic/:book" exact render={props => <Book {...props} books={books} />} />
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
