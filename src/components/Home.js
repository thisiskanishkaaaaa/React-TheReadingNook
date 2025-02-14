import React, { useState, useEffect } from "react";
import { books } from '../data';  
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";
import BookNotes from "../components/BookNotes";
import BookDetailsModal from "../components/BookDetailsModal";
import Dashboard from "../components/Dashboard";


    const Home = () => {
        const [selectedBook, setSelectedBook] = useState(null);
        const [currentPage, setCurrentPage] = useState(1);
        const [bookNotes, setBookNotes] = useState({});
      
        const booksPerPage = 5;
        const totalPages = Math.ceil(books.length / booksPerPage);
        const startIndex = (currentPage - 1) * booksPerPage;
        const endIndex = startIndex + booksPerPage;
        const currentBooks = books.slice(startIndex, endIndex);
      
        // Load saved notes from localStorage
        useEffect(() => {
          const savedNotes = JSON.parse(localStorage.getItem('bookNotes'));
          if (savedNotes) {
            setBookNotes(savedNotes);
          }
        }, []);
      
        // Save notes to localStorage
        useEffect(() => {
          if (Object.keys(bookNotes).length > 0) {
            localStorage.setItem('bookNotes', JSON.stringify(bookNotes));
          }
        }, [bookNotes]);
      
        const handleBookClick = (book) => {
          setSelectedBook(book);
        };
      
        const handleCloseModal = () => {
          setSelectedBook(null);
        };
      
        const handlePageChange = (page) => {
          setCurrentPage(page);
        };
      
        const handleAddNote = (bookId, note) => {
          if (note === '') {
            setBookNotes((prevNotes) => {
              const newNotes = { ...prevNotes };
              delete newNotes[bookId];
              return newNotes;
            });
          } else {
            setBookNotes((prevNotes) => ({
              ...prevNotes,
              [bookId]: note,
            }));
          }
        };
      
        return (
          <div>
           
      
            {/* Dashboard Section */}
            <Dashboard books={books} />
      
            {/* Book Cards */}
            <div className="books-container">
              {currentBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  onClick={handleBookClick}
                />
              ))}
            </div>
      
            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
      
            {/* Book Details Modal */}
            {selectedBook && (
              <BookDetailsModal
                book={selectedBook}
                onClose={handleCloseModal}
              />
            )}
      
            {/* Book Notes */}
            {selectedBook && (
              <BookNotes
                bookId={selectedBook.id}
                initialNote={bookNotes[selectedBook.id]}
                onAddNote={handleAddNote}
              />
            )}
          </div>
        );
      };
      
      export default Home;