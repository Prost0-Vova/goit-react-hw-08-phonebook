import { useState } from 'react';
import {
  useAddContactToFilterMutation,
  useGetContactsQuery,
} from 'redux/contactsapi';
import { Form, Input, Button } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContactToFilter] = useAddContactToFilterMutation();


  const validateContact = (name, number) => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidateContact = validateContact(name, number);

    if (isValidateContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

   

    try {
      const response =  await addContactToFilter({ name, number });

      if (response.error) {
        alert("Error"); 
        return;
      }
      alert("Successful")
      setName('');
      setNumber('');
    } catch (error) {
      alert("Error");
      
      
    }
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit} >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <Input
        type="tel"
        name="number"
        placeholder="Phone Number"
        value={number}
        onChange={handleNumberChange}
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}



export default ContactForm;
