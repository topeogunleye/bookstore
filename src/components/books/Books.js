import React, { useState }from 'react';

function Books() {
  const [books, setBooks] = useState([
    {
      title: 'The Hunger Games',
      Authur: 'Suzanne Collins',
      Category: 'Action',
    },
    {
      title: 'Dune',
      Authur: 'Frank Herbert',
      Category: 'Science Fiction',
    },
    {
      title: 'Capital in the Twenty First Century',
      Authur: 'Thomas Piketty',
      Category: 'Economy',
    },
  ]);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <div className="">
            <li key={book.id}>{book.title}</li>
            <li>{book.Authur}</li>
            <li>{book.completed ? 'Completed' : 'Not Completed'}</li>
            <button>Remove</button>
          </div>
        ))}
      </ul>

      <form action="">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Authur" />
        <label for="Category">Category</label>
        <select name="Category" id="Category">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>

        <button>Add Book</button>
      </form>
    </div>
  );
}

export default Books;
