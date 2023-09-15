import React, { useEffect, useState } from 'react';

import { CardItem } from '@components/CardItem';

import { useAppDispatch, useAppSelector } from '@hooks/ReduxToolkit-hooks';

import { Container } from '@components/Container';

import { IItems, apiGoogleBooks, increaseStartIndex } from '@store/slice/apiGoogleBooksSlice';

import style from './cardsList.scss';


export function CardsList() {
  const dispatch = useAppDispatch();
  const apiGoogleBooksState = useAppSelector(apiGoogleBooks);
  const [book, setBook] = useState<IItems[] | undefined>(apiGoogleBooksState.items);

  useEffect(() => {
    setBook(apiGoogleBooksState.items);
    localStorage.setItem('googleBooksData', JSON.stringify(book));
  }, [apiGoogleBooksState.items, book]);

  const handleLoadMore = () => {
    dispatch(increaseStartIndex(30));
  };

  return (
    <section>
      <Container>
        <span>{apiGoogleBooksState.data?.totalItems}</span>
        <div className={style.wrapper_content}>
          {book?.length === 0 && (
            <div style={{ textAlign: 'center' }}>
              Нет ни одной книги!
            </div>
          )}

          {book?.map(card => (
            <CardItem
              key={card?.id}
              title={card?.volumeInfo?.title}
              categories={card?.volumeInfo?.categories?.[0]}
              author={card?.volumeInfo?.authors}
              img={card?.volumeInfo?.imageLinks?.thumbnail}
              link={card?.id} />
          ))}
        </div>
      </Container>
      <div className={style.wrapper_btn}>
        {
          apiGoogleBooksState.loading ? (
            <div>Loading...</div>
          ) : (
            <button className={style.btn} onClick={handleLoadMore}>Load more</button>
          )
        }
      </div>

    </section>
  );
}

