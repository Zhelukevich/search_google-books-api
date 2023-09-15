import React from 'react';

import { Link } from 'react-router-dom';

import { v4 } from 'uuid';

import style from './cardItem.scss';

interface ICardItemProps {
  title: string;
  categories: string[] | string;
  img: string;
  author: string[];
  link: string;
}

export function CardItem({ title, categories, img, author, link }: ICardItemProps) {
  return (
    <article className={style.article}>

      <div className={style.img_block}>
        <img src={img} alt={title} />
      </div>

      <div>
        <samp>
          {categories}
        </samp>
        <h2>
          {title}
        </h2>
        <ul>
          {
            author?.map(el => (
              <li key={v4()}>{el}</li>
            ))
          }
        </ul>
      </div>

      <Link
        className={style.link}
        to={`/${link}`}
        aria-label="Ссылка на детальную информацию"
      >
      </Link>

    </article>
  );
}
