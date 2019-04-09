import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const BookCard = ({ book }) => {
    return (
        <article className="book-card">
            <img src={`/img/books/${book.cover}`} alt={book.title} />
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <p>Pages: {book.pages}</p>
            <Link to={`/books/${book.topic}/${book.slug}`}>Details</Link>
        </article>
    );
};

export default BookCard;