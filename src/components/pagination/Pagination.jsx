import React from "react";
import s from './pagination.module.css';

const Pagination = ({ plusPage }) => {
  return (
    <button className={s.loadMore} onClick={plusPage}>
      Load more
    </button>
  );
};

export default Pagination;

