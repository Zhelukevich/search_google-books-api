import React, { useEffect, useState } from 'react';

import { CardItem } from '@components/CardItem';

import { useAppDispatch, useAppSelector } from '@hooks/ReduxToolkit-hooks';

import { Container } from '@components/Container';

import { apiGoogleBooks, maxResultsBook, sortingBook } from '@store/slice/apiGoogleBooksSlice';

import style from './cardsList.scss';


export function CardsList() {
  const data = useAppSelector(state => state.apiGoogleBooks.data);
  const dispatch = useAppDispatch();

  const [book, setBook] = useState(data);

  useEffect(() => {
    if (data !== undefined) {
      setBook([...data]);
    }
  }, [data]);


  // const dispatch = useAppDispatch();

  const handlerClick = () => {
    // dispatch(maxResultsBook(50));
  };

  return (
    <section>
      <Container>
        <div className={style.wrapper_content}>
          {book?.length === 0 && (
            <div style={{ textAlign: 'center' }}>
              Нет ни одной книги!
            </div>
          )}

          {book?.map(card => (
            <CardItem
              key={card.id}
              title={card.volumeInfo.title}
              categories={card.volumeInfo.categories}
              img={card.volumeInfo.imageLinks?.thumbnail}
              author={card.smallThumbnail.authors[0]}
              link={card.id} />
          ))}
        </div>
      </Container>
      <button onClick={handlerClick}>Load more</button>
    </section>
  );
}

