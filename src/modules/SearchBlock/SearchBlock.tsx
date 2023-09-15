import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/ReduxToolkit-hooks';
import { apiGoogleBooks, searchBook, fetchGoogleBooks, sortingBook, categoryBook } from '@store/slice/apiGoogleBooksSlice';

import { Container } from '@components/Container';
import { SearchInput } from '@components/SearchInput';
import { SearchSelect } from '@components/SearchSelect';

import style from './searchBlock.scss';

export interface FilterItem {
  value: string;
  text: string;
}

const categoriesData: FilterItem[] = [
  {
    value: '',
    text: 'All',
  },
  {
    value: 'art',
    text: 'Art',
  },
  {
    value: 'biography',
    text: 'Biography',
  },
  {
    value: 'computers',
    text: 'Computers',
  },
  {
    value: 'history',
    text: 'History',
  },
  {
    value: 'medical',
    text: 'Medical',
  },
  {
    value: 'poetry',
    text: 'Poetry',
  },
];

const sortingData: FilterItem[] = [
  {
    value: 'relevance',
    text: 'Relevance',
  },
  {
    value: 'newest',
    text: 'Newest',
  },
];



export function SearchBlock() {
  const dispatch = useAppDispatch();
  const apiGoogleBooksState = useAppSelector(apiGoogleBooks);

  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState(apiGoogleBooksState.category);
  const [sorting, setSorting] = useState(apiGoogleBooksState.sorting);

  const handlerSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
  };

  const handleCategoriesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategories = event.target.value;
    setCategories(newCategories);
  };

  const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSorting = event.target.value;
    setSorting(newSorting);
  };

  useEffect(() => {
    dispatch(sortingBook(sorting));
  }, [sorting, dispatch]);

  useEffect(() => {
    dispatch(categoryBook(categories));
  }, [categories, dispatch]);


  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(searchBook(search));
  };


  return (
    <section className={style.section}>
      <Container>
        <form className={style.form} onSubmit={handlerSubmit}>
          <h1>Search for books</h1>
          <div className={style.block_search}>
            <SearchInput
              value={search}
              onChange={handlerSearchChange}
            />
            <div className={style.select_list}>
              <SearchSelect
                onChange={handleCategoriesChange}
                htmlFor={'categoriesId'}
                name={'categories'}
                id={'categoriesId'}
                label={'Categories'}
                data={categoriesData}
                selectedValue={categories}
              />
              <SearchSelect
                onChange={handleSortingChange}
                htmlFor={'sortingId'}
                name={'sorting'}
                id={'sortingId'}
                label={'Sorting by'}
                data={sortingData}
                selectedValue={sorting}
              />
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
}

