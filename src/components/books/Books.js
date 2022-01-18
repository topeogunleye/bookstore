import React from 'react';
import Book from '../book/Book';
import AddNewBook from '../form/AddNewBook';

function Books() {
  const books = [
    {
      title: 'The Hunger Games',
      authur: 'Suzanne Collins',
      category: 'Action',
      completed: false,
      id: 1,
    },
    {
      title: 'Dune',
      authur: 'Frank Herbert',
      category: 'Science Fiction',
      completed: false,
      id: 2,
    },
    {
      title: 'Capital in the Twenty First Century',
      authur: 'Thomas Piketty',
      category: 'Economy',
      completed: false,
      id: 3,
    },
  ];

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ul>

      <AddNewBook />
    </div>
  );
}

export default Books;
