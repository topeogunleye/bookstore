import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

function Book({ book }) {
  useEffect(() => {
    console.log(typeof book);
  }, [book]);
  const dispatch = useDispatch();

  const removeBookFromStore = (book) => {
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(removeBook(book));
  };

  return (
    <div key={book.id}>
      <li key={book.id}>{book.title}</li>
      <li>{book.authur}</li>
      <li>{book.completed ? 'Completed' : 'Not Completed'}</li>
      <button type="button" onClick={() => removeBookFromStore(book)}>
        Remove
      </button>
    </div>
  );
}

// book prop validation
Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authur: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

// An object taking on a particular shape
export default Book;
