import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const UserProfile = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        User Profile
      </Typography>
      <form noValidate autoComplete="off">
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary">
          Update Profile
        </Button>
      </form>
    </Container>
  );
}

export default UserProfile;
