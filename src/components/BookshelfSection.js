import React from 'react';
import BookCard from './BookCard';

const BookshelfSection = ({ title, books }) => (
  <div className="bookshelf-section">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="books-container">
      {books.map(book => <BookCard key={book.id} book={book} />)}
    </div>
  </div>
);

export default BookshelfSection;
