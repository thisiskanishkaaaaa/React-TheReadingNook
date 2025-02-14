import React, { useState } from 'react';
import BookCard from './BookCard';
import { books } from '../data'; // Assuming books data is stored here

const Bookshelf = () => {
  const [filter, setFilter] = useState('favorites'); // Only showing favorites

  const filteredBooks = books.filter((book) => {
    if (filter === 'favorites') {
      return book.favorite; // Only include books that are marked as favorites
    }
    return true; // You can change this to filter by other criteria if needed
  });

  return (
    <div className="bookshelf-section">
      <h2>My Favorite Books</h2>
      
      <div className="filters">
        <button onClick={() => setFilter('favorites')}>Favorites</button>
      </div>
      
      <div className="bookshelf">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
