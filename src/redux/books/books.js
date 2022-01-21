import axios from 'axios';

// books.js
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const REMOVE_ALL_BOOKS = 'bookStore/books/REMOVE_ALL_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  item_id: payload.id,
});

export const removeAllBooks = () => ({
  type: REMOVE_ALL_BOOKS,
});

export const fetchBooks = () => (dispatch) => {
  axios
    .get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VPg2NHR7FOEaX70FWtik/books/'
    )
    .then((response) => {
      const books = response.data;
      Object.keys(books).forEach((itemId) => {
        const [book] = books[itemId];
        book.item_id = itemId;
        dispatch(addBook(book));
      });
    })
    .catch(() => {});
};

export const postBook = (newBook) => (dispatch) => {
  axios
    .post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VPg2NHR7FOEaX70FWtik/books/',
      newBook
    )
    .then(() => dispatch(addBook(newBook)))
    .catch(() => {});
};

export const deleteBook = (id) => (dispatch) => {
  axios
    .delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VPg2NHR7FOEaX70FWtik/books/${id}`
    )
    .then(() => dispatch(removeBook({ id })))
    .catch(() => {});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.item_id);
    case REMOVE_ALL_BOOKS:
      return [];
    default:
      return state;
  }
};

export default reducer;
