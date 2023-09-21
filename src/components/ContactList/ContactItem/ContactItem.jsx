import React from 'react';
import { ListItem, Button } from '../ContactList.styled';
import { useDeleteContactFromFilterMutation } from 'redux/contactsapi';

function ContactItem({ id, name, number }) {


  const [deleteContactFromFilter] = useDeleteContactFromFilterMutation();

  const removeContact = async () => {
    try {

      await deleteContactFromFilter(id);
      
      alert("successful")
    } catch (error) {
      alert('an error occured during delete process');
    }
  };
  return (
    <ListItem key={id}>
      {name}: {number}
      <Button onClick={() => removeContact(id)}>Delete</Button>
    </ListItem>
  );
}

export default ContactItem;
