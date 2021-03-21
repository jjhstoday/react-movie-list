import React from 'react';
import { searchInput, container, searchIcon } from './Search.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Search({ onKeyUp }) {
  return (
    <div className={container}>
      <input
        id="search"
        type="search"
        placeholder="Search movie what you want!"
        className={searchInput}
        onKeyUp={onKeyUp}
        autoComplete="off"
      ></input>
      <label htmlFor="search">
        <AiOutlineSearch className={searchIcon} />
      </label>
    </div>
  );
}
