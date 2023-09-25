import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

import {
  Button,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
} from '@mui/material';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

 
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(logIn(values));
      resetForm();
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'grey' }}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <ErrorMessage name="password" component="div" />
            <FormControlLabel
              control={<Field as={Checkbox} name="remember" />}
              label="Remember me"
            />
           <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="medium"
            sx={{ mt: 5 }}
          >
            Sign in
          </Button>
          </Form>
        </Formik>
        <Grid container justifyContent="center" sx={{ mt:1 }}>
          <Grid item>
            <Link to="/register"> Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginForm;