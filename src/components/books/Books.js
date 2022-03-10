import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeAllBooks } from '../../redux/books/books';
import Book from '../book/Book';
import AddNewBook from '../form/AddNewBook';

function Books() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    return () => {
      dispatch(removeAllBooks());
    };
  }, []);

  // GET books from redux store
  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200">
      <ul className="py-8 w-screen m-auto">
        {books.map((book) => (
          <Book
            category={book.category}
            id={book.item_id}
            title={book.title}
            key={book.item_id}
          />
        ))}
      </ul>

      <AddNewBook />
    </div>
  );
}

export default Books;
