import { useState } from 'react';

import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsAsyncActions';
import { selectContacts } from 'redux/selectors';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Container, TextField, Typography } from '@mui/material';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const initialValues = {
    name: '',
    number: '',
  };



  const validateContact = (name, number) => {
    if (!contacts || !Array.isArray(contacts)) {
      return false;
    }
    return contacts.some(
      contact => (
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
      )
    );
  };

  const handleSubmit = async (e) => {

    const isValidateContact = validateContact(name, number);

    if (isValidateContact) {
      Notiflix.Notify.failure(`${name} is already in contacts.`)
      return;
    }

    try {
      const response = await dispatch(addContact({ name, number: number }));

      if (addContact.fulfilled.match(response)) {
        setName("")
        setNumber("")
        Notiflix.Notify.success("Success");
      } else {
        Notiflix.Notify.failure("Failed");
      }
    } catch (error) {
      Notiflix.Notify.failure("Error");
    }
  };


  return (
  <Container maxWidth="xs">
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ marginTop: 8}}
      >
      
      </Typography>
      <Formik
      initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            as={TextField}
            fullWidth
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            margin="normal"
            helperText={<ErrorMessage name="name" />}
          />
          <Field
            as={TextField}
            fullWidth
            id="number"
            name="number"
            label="Number"
            variant="outlined"
            margin="normal"
            helperText={<ErrorMessage name="number" />}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="medium"
            sx={{ mt: 2 }}
          >
            Add Contact
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}



export default ContactForm;
