import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../../redux/books/books';
import Example from './DropDown';
import Input from './Input';

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

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      category: 'Action',
    };

    console.log(newBook);

    dispatch(postBook(newBook));

    setCategory('');
    setTitle('');
  };

  return (
    <form className="flex justify-between py-8 px-28 max-w-7xl mx-auto md:flex items-center space-x-4 space-y-4 md:space-y-0">
      <Input title={title} handleTitle={handleTitle} />
      <Example handleCategory={handleCategory} category={category} />

      <button
        type="submit"
        onClick={submitBookToStore}
        className="bg-blue-400 text-white px-4 py-2"
      >
        Add Book
      </button>
    </form>
  );
}

export default AddNewBook;
