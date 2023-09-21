import React from 'react';

import ContactItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import {ContList} from './ContactList.styled';
import {  useGetFilterQuery } from 'redux/contactsapi';

function ContactList() {

  const filter = useSelector(getFilter);

  const { data: filteredContacts, isLoading, isError } = useGetFilterQuery(filter);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading contacts</div>;
  }

  return (
    <ContList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ContList>
  );
}


export default ContactList;