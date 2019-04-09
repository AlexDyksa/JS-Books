import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';
import books from './data/books.json'
import topics from './data/topics.json'


render(
    <App books={books} topics={topics} />,
    document.getElementById('root')
);

serviceWorker.unregister();
