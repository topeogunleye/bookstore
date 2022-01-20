import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/books/books';
import Book from '../book/Book';
import AddNewBook from '../form/AddNewBook';

function Books() {
  const dispatch = useDispatch();

  // GET books from redux store
  const books = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
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
