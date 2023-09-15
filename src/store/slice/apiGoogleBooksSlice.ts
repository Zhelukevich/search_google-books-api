import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

import { RootState } from '../store';

const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
const maxResults = 30;
const urlApi = 'https://www.googleapis.com/books/v1/volumes';

interface FetchGoogleBooksParams {
  category?: string;
  sorting?: string;
  search?: string;
  startIndex?: number;
}

export const fetchGoogleBooks = createAsyncThunk(
  'googleBooks/fetchGoogleBooks',
  async ({ category, sorting, search, startIndex }: FetchGoogleBooksParams) => {

    try {
      const resp = await axios.get(urlApi, {
        params: {
          q: `subject:${category} ${search}`,
          orderBy: sorting,
          startIndex: startIndex,
          maxResults: maxResults,
          key: apiKey,
        },
      });

      return resp.data;

    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  });


export interface IItems {
  id: string;
  volumeInfo: {
    title: string,
    subtitle: string,
    authors: string[],
    categories: string[],
    description: string
    imageLinks: {
      thumbnail: string,
      smallThumbnail: string,
    };
  }
}

interface IGoogleBooks {
  totalItems: number;
  items: IItems[];
}

interface GoogleBooksState {
  data: IGoogleBooks | null,
  items: IItems[],
  category: string,
  sorting: string,
  search: string,
  startIndex: number,
  loading: boolean,
  error: string | undefined
}

const initialState: GoogleBooksState = {
  data: null,
  items: [],
  category: '',
  sorting: 'relevance',
  startIndex: 0,
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
    increaseStartIndex: (state, action: PayloadAction<number>) => {
      const totalItems = state.data?.totalItems ?? 0;
      if (state.items.length < totalItems) {
        state.startIndex += action.payload;
        if (state.items.length < totalItems) {
          state.items = state.items.concat(state.data?.items || []);
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchGoogleBooks.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchGoogleBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.items = state.data?.items || [];
      state.error = '';
    });
    builder.addCase(fetchGoogleBooks.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export const { categoryBook, sortingBook, searchBook, increaseStartIndex } = ApiGoogleBooksSlice.actions;
export const apiGoogleBooks = (state: RootState) => state.apiGoogleBooks;
export default ApiGoogleBooksSlice.reducer;


