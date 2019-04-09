import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Sidenav = (props) => {
    const topics = props.topics.map(topic =>
        <NavLink
            to={`/books/${topic.id}`}
            key={topic.id}
            className="app-sidenav__link"
        >
            <img src={`/img/topics/${topic.id}.svg`} alt={topic.id} />
            {topic.title}
        </NavLink>
    );

    return (
        <aside className="app-sidenav">
            <nav>
                {topics}
            </nav>
        </aside>
    );
};

export default Sidenav;