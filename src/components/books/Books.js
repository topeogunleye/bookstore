import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../book/Book';
import AddNewBook from '../form/AddNewBook';

function Books() {
  // GET books from redux store
  const books = useSelector((state) => state.booksReducer.books);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <Book
            category={book.category}
            completed={book.completed}
            author={book.author}
            id={book.id}
            title={book.title}
            key={book.id}
          />
        ))}
      </ul>

      <AddNewBook />
    </div>
  );
}

export default Books;
