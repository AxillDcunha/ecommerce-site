import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Checkout = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Checkout
      </Typography>
      <form noValidate autoComplete="off">
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Address" fullWidth margin="normal" />
        <TextField label="City" fullWidth margin="normal" />
        <TextField label="Postal Code" fullWidth margin="normal" />
        <TextField label="Country" fullWidth margin="normal" />
        <Button variant="contained" color="primary">
          Place Order
        </Button>
      </form>
    </Container>
  );
}

export default Checkout;
