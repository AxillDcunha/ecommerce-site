import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Order Confirmation
      </Typography>
      <Typography variant="body1">
        Thank you for your order! Your order number is #12345.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Back to Home
      </Button>
    </Container>
  );
}

export default OrderConfirmation;
