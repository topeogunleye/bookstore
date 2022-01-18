import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

function Book({
  author, title, id, completed,
}) {
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(removeBook(id));
  };

  return (
    <div>
      <li>{title}</li>
      <li>{author}</li>
      <li>{completed ? 'Completed' : 'Not Completed'}</li>
      <button type="button" onClick={removeBookFromStore}>
        Remove
      </button>
    </div>
  );
}

// book prop validation
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

// An object taking on a particular shape
export default Book;
