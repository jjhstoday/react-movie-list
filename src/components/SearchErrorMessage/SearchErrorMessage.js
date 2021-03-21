import React from 'react';
import { BiMessageRoundedError } from 'react-icons/bi';
import { searchError, searchErrorIcon } from './SearchErrorMessage.module.scss';

export default function SearchErrorMessage({ query }) {
  return (
    <div className={searchError}>
      <BiMessageRoundedError className={searchErrorIcon} />
      {`${query}(으)로 검색된 영화가 없습니다.`}
    </div>
  );
}
