import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@hooks/ReduxToolkit-hooks';
import { IItems } from '@store/slice/apiGoogleBooksSlice';
import { useParams } from 'react-router-dom';

export default function BookPage() {
  const { bookID } = useParams();
  const dataBook = useAppSelector(state => state.apiGoogleBooks.items);
  const [volumeBook, setVolumeBook] = useState<IItems | undefined>(Object);


  useEffect(() => {

    dataBook?.forEach((book) => {
      book.id === bookID ? setVolumeBook({ ...book }) : null;
    });

  }, [dataBook, bookID]);

  return (
    <div>
      <div>
        {
          volumeBook?.volumeInfo?.imageLinks?.thumbnail ? (
            <img src={volumeBook?.volumeInfo?.imageLinks?.thumbnail} alt={volumeBook?.volumeInfo?.title} />
          ) : (
            <div>
              <span>?????????</span>
            </div>
          )
        }

      </div>

      <div>
        {
          volumeBook?.volumeInfo?.categories ? (
            <span>{volumeBook?.volumeInfo?.categories?.join('/ ')}</span>
          ) : (
            <></>
          )
        }
        <br />

        <h1>{volumeBook?.volumeInfo?.title}</h1>
        <br />


        {
          volumeBook?.volumeInfo?.authors ? (
            <span>{volumeBook?.volumeInfo?.authors?.join(', ')}</span>
          ) : (
            <></>
          )
        }

        <br />

        {
          volumeBook?.volumeInfo?.description || volumeBook?.volumeInfo?.subtitle ? (
            <>
              {volumeBook?.volumeInfo?.description && (
                <span>{volumeBook.volumeInfo.description}</span>
              )}
              {volumeBook?.volumeInfo?.subtitle && (
                <span>{volumeBook.volumeInfo.subtitle}</span>
              )}
            </>
          ) : (
            <></>
          )
        }
      </div>
    </div>

  );
}
