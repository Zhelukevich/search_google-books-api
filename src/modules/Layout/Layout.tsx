import React from 'react';
import { SearchBlock } from '@modules/SearchBlock';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
  return (
    <>
      <SearchBlock />
      <Outlet />
    </>
  );
};
