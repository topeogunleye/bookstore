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
    <li className="bg-white h-40 m-10 py-8 px-8">
      <p className="text-gray-500 font-bold text-sm">{title}</p>
      <p className="text-xl font-bold">{category}</p>
      <div className="grid grid-cols-3 max-w-xs divide-x text-sm text-blue-400">
        <button type="button" className="pr-3">
          Comments
        </button>
        <button type="button" onClick={removeBookFromStore} className="">
          Remove
        </button>
        <button type="button" className="">
          Edit
        </button>
      </div>
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
