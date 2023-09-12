import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

import { RootState } from '../store';

const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

interface FetchGoogleBooksParams {
  category?: string;
  sorting?: string;
  search?: string;
  maxResults?: number;
}

export const fetchGoogleBooks = createAsyncThunk(
  'googleBooks/fetchGoogleBooks',
  async ({ category, sorting, search, maxResults }: FetchGoogleBooksParams) => {

    try {
      const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}+${search}&orderBy=${sorting}&maxResults=${maxResults}&key=${apiKey}`);

      return resp.data.items;

    } catch (error) {
      console.error('Error:', error);
    }
  });

interface IGoogleBooks {
  title: string;
  img: string;
  id: string;
  volumeInfo: {
    categories: string,
    title: string,
    imageLinks: string,
  }
}

interface GoogleBooksState {
  items: IGoogleBooks[],
  category: string,
  sorting: string,
  search: string,
  maxResults: number,
  loading: boolean,
  error: string | undefined
}

const initialState: GoogleBooksState = {
  items: [],
  category: 'all',
  sorting: 'relevance',
  maxResults: 30,
  search: '*',
  loading: false,
  error: '',
};

export const ApiGoogleBooksSlice = createSlice({
  name: 'ApiGoogleBooks',
  initialState: initialState,
  reducers: {
    categoryBook: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    sortingBook: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
    searchBook: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    maxResultsBook: (state, action: PayloadAction<number>) => {
      state.maxResults = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchGoogleBooks.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchGoogleBooks.fulfilled, (state, actions) => {
      state.loading = false;
      state.items = actions.payload;
      state.error = '';
    });
    builder.addCase(fetchGoogleBooks.rejected, (state, actions) => {
      state.loading = false;
      state.items = [];
      state.error = actions.error.message;
    });
  },
});

export const { categoryBook, sortingBook, searchBook, maxResultsBook } = ApiGoogleBooksSlice.actions;
export const apiGoogleBooks = (state: RootState) => state.apiGoogleBooks;
export default ApiGoogleBooksSlice.reducer;


