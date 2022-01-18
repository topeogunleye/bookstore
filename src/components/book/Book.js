import React from 'react';
import PropTypes from 'prop-types';

function Book({ books }) {
  return (
    <div>
      {books.map((book) => (
        <div className="" key={book.id}>
          <li key={book.id}>{book.title}</li>
          <li>{book.Authur}</li>
          <li>{book.completed ? 'Completed' : 'Not Completed'}</li>
          <button type="button">Remove</button>
        </div>
      ))}
    </div>
  );
}

// books prop validation
Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authur: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Book;
