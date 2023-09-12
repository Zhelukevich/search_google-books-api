import React from 'react';
import { v4 } from 'uuid';

import { FilterItem } from '@modules/SearchBlock';

import style from './searchSelect.scss';


interface ISearchSelectProps {
  htmlFor: string;
  name: string;
  id: string;
  label: string;
  selectedValue: string;
  data: FilterItem[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SearchSelect({ htmlFor, name, id, label, selectedValue, data, onChange }: ISearchSelectProps) {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <select
        className={style.select}
        onChange={onChange}
        value={selectedValue}
        name={name}
        id={id}
      >
        {
          data.map(el => (
            <option
              key={v4()}
              value={el.value}>
              {el.text}
            </option>
          ))
        }
      </select>
    </div >
  );
}
