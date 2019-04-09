import React from 'react';

const Book = ({ match, books }) => {
    const book = books.find(book => match.params.book === book.slug);
    return (
        <main className="books">
            <article className="book">
                <img src={`/img/books/${book.cover}`} alt={book.title} />
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Year: {book.year}</p>
                <p>Pages: {book.pages}</p>
                <p>{book.description}</p>
            </article>
        </main>
    );
};

export default Book;