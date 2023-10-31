import React from 'react';
import { FilterInput, FilterWrap } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { RiUserSearchFill } from 'react-icons/ri';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterWrap>
      <RiUserSearchFill className="icon-search" />
      <FilterInput
        type="text"
        onInput={event => dispatch(setFilter(event.target.value.toLowerCase()))}
      />
    </FilterWrap>
  );
}
