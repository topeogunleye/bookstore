// books.js
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = () => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const initialState = {
  loading: true,
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
  error: ''
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: 
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload
      }
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
