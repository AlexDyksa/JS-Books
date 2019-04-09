import React from 'react';

import BookCard from '../components/BookCard';

const Books = ({ match, books }) => {
    const sortedBooks = match.params.topic ? books.filter(book => book.topic === match.params.topic) : books;

    const booksCard = sortedBooks.map((book, index) => <BookCard key={index} book={book} />);

    return (
        <main className="books">
            <h1>Books</h1>
            <section className="books-list">
                {booksCard}
            </section>
        </main>
    );
};

export default Books;