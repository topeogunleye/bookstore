// books.js
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  books: [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      completed: false,
      id: 1,
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      completed: false,
      id: 2,
    },
    {
      title: 'Capital in the Twenty First Century',
      author: 'Thomas Piketty',
      category: 'Economy',
      completed: false,
      id: 3,
    },
  ],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return {
        books: state.books.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
