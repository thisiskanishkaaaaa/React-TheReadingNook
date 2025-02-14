import React, { useState } from 'react';
import '../styles.css'; // Ensure styles for the modal are in styles.css


const BookDetailsModal = ({ book, onClose, note, onAddNote }) => {
  const [newNote, setNewNote] = useState(note || ''); // Initialize with existing note

  const handleSaveNote = () => {
    onAddNote(book.id, newNote); // Save the note for the current book
    setNewNote(''); // Clear input after saving
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={book.cover} alt={book.title} />
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
        <p>{book.description}</p>

        <div>
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Add your note here"
          />
          <button onClick={handleSaveNote}>Save Note</button>
        </div>
      </div>
    </div>
  );
};




export default BookDetailsModal;
