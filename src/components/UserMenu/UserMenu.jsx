import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import useAuth from 'hooks/useAuth';
import { Avatar, Box, Button, Typography, Container } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Box>
        <Avatar
          alt="avatar"
        />
        <Typography  color="#35baf6">
          Welcome, {user.name}
        </Typography>
        <Button
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default UserMenu;