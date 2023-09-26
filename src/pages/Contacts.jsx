import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import {fetchContacts} from '../redux/contactsAsyncActions'

function Contacts() {
  useEffect(() => {
    
    fetchContacts(); // Потрібно передати необхідні параметри, які ви використовуєте для запиту
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList />
        <Filter />
      </HelmetProvider>
    </>
  );
}

export default Contacts;