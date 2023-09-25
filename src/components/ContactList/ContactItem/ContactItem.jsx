import React from 'react';
import { ListItem, Button } from '../ContactList.styled';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsAsyncActions';


function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

 

  const removeContact = async () => {
    try {

      await dispatch(deleteContact(id));
      
      Notiflix.Notify.success("Successful")
    } catch (error) {
      Notiflix.Notify.failure("Error");
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
