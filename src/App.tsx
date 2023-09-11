import React, { useEffect } from 'react';

import './style/reset.global.css';
import { useAppDispatch, useAppSelector } from '@hooks/ReduxToolkit-hooks';

import { fetchGoogleBooks } from './store/slice/apiGoogleBooksSlice';



function App() {
  const dispatch = useAppDispatch();
  const googleBooksList = useAppSelector(state => state.apiGoogleBooks.googleBooks);

  console.log(googleBooksList);


  useEffect(() => {
    dispatch(fetchGoogleBooks());
  }, [dispatch]);

  return (
    <div>куегшщдэж</div>
  );
}

export default App;
