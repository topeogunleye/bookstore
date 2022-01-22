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
    <div className="grid place-items-center">
      <ul className="py-8">
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
