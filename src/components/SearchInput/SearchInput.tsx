import React from 'react';

import style from './searchInput.scss';


interface ISearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ value, onChange }: ISearchInputProps) {

  return (
    <input
      className={style.input}
      value={value}
      onChange={onChange}
      type="text"
      placeholder="search"
    />
  );

}
