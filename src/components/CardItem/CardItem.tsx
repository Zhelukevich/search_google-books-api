import React from 'react';

import { Link } from 'react-router-dom';

import style from './cardItem.scss';

interface ICardItemProps {
  title: string;
  categories: string;
  img: string;
  author: string;
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
        <samp>
          {author}
        </samp>
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
