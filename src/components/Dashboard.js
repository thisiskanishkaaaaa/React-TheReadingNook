
import React from 'react';
import '../styles.css';  

const Dashboard = ({ books }) => {
  const totalBooks = books.length;
  const finishedBooks = books.filter(book => book.status === 'Finished').length;
  const currentlyReading = books.filter(book => book.status === 'Currently Reading').length;
  const toReadBooks = books.filter(book => book.status === 'To Read').length;

  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Books</h3>
          <p>{totalBooks}</p>
        </div>
        <div className="stat-card">
          <h3>Finished</h3>
          <p>{finishedBooks}</p>
        </div>
        <div className="stat-card">
          <h3>Currently Reading</h3>
          <p>{currentlyReading}</p>
        </div>
        <div className="stat-card">
          <h3>To Read</h3>
          <p>{toReadBooks}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
