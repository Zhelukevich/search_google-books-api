import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

export const fetchGoogleBooks = createAsyncThunk('googleBooks/fetchGoogleBooks', () => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=${apiKey}`)
    .then((resp) => {
      if (resp.data) {
        return resp.data.data;
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});


interface GoogleBooksState {
  googleBooks: [],
  loading: boolean,
  error: string | undefined
}

const initialState: GoogleBooksState = {
  googleBooks: [],
  loading: false,
  error: '',
};

const ApiGoogleBooksSlice = createSlice({
  name: 'ApiGoogleBooks',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoogleBooks.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchGoogleBooks.fulfilled, (state, actions) => {
      state.loading = false;
      state.googleBooks = actions.payload;
      state.error = '';
    });
    builder.addCase(fetchGoogleBooks.rejected, (state, actions) => {
      state.loading = false;
      state.googleBooks = [];
      state.error = actions.error.message;
    });
  },
});

export default ApiGoogleBooksSlice.reducer;


