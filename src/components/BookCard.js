import React from 'react';
import '../styles.css';

const BookCard = ({ book, onClick }) => (
  <div className="book-card" onClick={() => onClick(book)}>
    <img src={book.cover} alt={book.title} />
    <h3>{book.title}</h3>
    <p>{book.author}</p>
  </div>
);

export default BookCard;


