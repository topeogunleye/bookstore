import React from 'react';

function Books() {
  const [books] = [
    {
      title: 'The Hunger Games',
      Authur: 'Suzanne Collins',
      Category: 'Action',
      id: 1,
    },
    {
      title: 'Dune',
      Authur: 'Frank Herbert',
      Category: 'Science Fiction',
      id: 2,
    },
    {
      title: 'Capital in the Twenty First Century',
      Authur: 'Thomas Piketty',
      Category: 'Economy',
      id: 3,
    },
  ];

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <div className="" key={book.id}>
            <li key={book.id}>{book.title}</li>
            <li>{book.Authur}</li>
            <li>{book.completed ? 'Completed' : 'Not Completed'}</li>
            <button type="button">Remove</button>
          </div>
        ))}
      </ul>

      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Authur" />
        <label htmlFor="Category">
          Category
          <select name="Category" id="Category">
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
        </label>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Books;
