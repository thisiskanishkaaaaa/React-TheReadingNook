import React, { useState, useEffect } from 'react';

const BookNotes = ({ bookId }) => {  // Removed onAddNote from props
  const [note, setNote] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(`notes_${bookId}`)) || [];
    setSavedNotes(storedNotes);
  }, [bookId]);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveNote = () => {
    if (note.trim() === '') return;  // Prevent saving empty notes

    const updatedNotes = [...savedNotes, note];
    setSavedNotes(updatedNotes);

    // Save to localStorage
    localStorage.setItem(`notes_${bookId}`, JSON.stringify(updatedNotes));

    // Clear the textarea after saving
    setNote('');
  };

  return (
    <div className="note-container">
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Add your notes here..."
      />
      <button onClick={handleSaveNote}>Save Note</button>

      {/* Display Saved Notes */}
      <div className="saved-notes">
        <h3>Saved Notes:</h3>
        {savedNotes.length > 0 ? (
          savedNotes.map((savedNote, index) => (
            <p key={index} className="note-item">{savedNote}</p>
          ))
        ) : (
          <p>No notes added yet.</p>
        )}
      </div>
    </div>
  );
};

export default BookNotes;
