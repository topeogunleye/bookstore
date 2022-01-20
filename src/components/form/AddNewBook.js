import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../../redux/books/books';

function AddNewBook() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatch(postBook(newBook));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitle}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={handleCategory}
      />

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          submitBookToStore();
        }}
      >
        Add Book
      </button>
    </form>
  );
}

export default AddNewBook;
