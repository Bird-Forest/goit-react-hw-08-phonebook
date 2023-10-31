import React from 'react';
import { RiUserUnfollowFill } from 'react-icons/ri';
import {
  BtnDelete,
  ContactName,
  ContactNumber,
  ContactWrap,
} from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ContactWrap id={contact.id} key={nanoid()}>
      <ContactName>{contact.name}</ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <BtnDelete type="button" onClick={handleDelete}>
        <RiUserUnfollowFill className="icon-delete" />
      </BtnDelete>
    </ContactWrap>
  );
}
