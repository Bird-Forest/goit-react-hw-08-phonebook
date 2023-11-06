import React, { useEffect } from 'react';
import { Wrap } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { TfiFaceSad } from 'react-icons/tfi';
import Loading from 'components/Loader/Loading';
import ErrorMessage from 'components/Error/Error';

export default function ContactList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const arrContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const showArr = Array.isArray(arrContacts) && arrContacts.length !== 0;
  return (
    <Wrap>
      {isLoading && <Loading />}
      {error && <ErrorMessage message={'Not found'} />}
      {showArr ? (
        arrContacts.map(contact => {
          return <Contact contact={contact} key={nanoid()} />;
        })
      ) : (
        <TfiFaceSad className="icon-sad" />
      )}
    </Wrap>
  );
}
