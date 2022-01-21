import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';

function Book({ category, title, id }) {
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(deleteBook(id));
  };

  return (
    <li>
      <p>{title}</p>
      <p>{category}</p>
      <button type="button" onClick={removeBookFromStore}>
        Remove
      </button>
    </li>
  );
}

// book prop validation
Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

// An object taking on a particular shape
export default Book;
