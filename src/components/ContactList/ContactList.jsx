import React from 'react';

import ContactItem from './ContactItem/ContactItem';

import { useSelector } from 'react-redux';
import { selectContacts, selectContactsFilter } from 'redux/selectors';

import {ContList} from './ContactList.styled';


function ContactList() {

  const filter = useSelector(selectContactsFilter);
  const contacts = useSelector(selectContacts);
  if (!contacts || !Array.isArray(contacts) || contacts.length === 0) {
    return null;
  }

  if (!contacts) {
    return null;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

 

  return (
    <ContList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ContList>
  );
}


export default ContactList;