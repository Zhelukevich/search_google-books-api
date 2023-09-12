import React, { Suspense, lazy, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/ReduxToolkit-hooks';
import { apiGoogleBooks, fetchGoogleBooks } from '@store/slice/apiGoogleBooksSlice';

import { Layout } from '@modules/Layout';
import { HomePage } from '@pages/HomePage';
const BookPage = lazy(() => import('@pages/BookPage/BookPage'));

import './style/reset.global.css';


function App() {
  const dispatch = useAppDispatch();
  const apiGoogleBooksState = useAppSelector(apiGoogleBooks);

  useEffect(() => {
    dispatch(fetchGoogleBooks({
      category: apiGoogleBooksState.category,
      sorting: apiGoogleBooksState.sorting,
      search: apiGoogleBooksState.search,
      maxResults: apiGoogleBooksState.maxResults,
    }));
  }, [dispatch, apiGoogleBooksState.category, apiGoogleBooksState.sorting, apiGoogleBooksState.search, apiGoogleBooksState.maxResults]);

  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=":book" element={<BookPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
