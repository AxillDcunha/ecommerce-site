import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', price: 200, quantity: 2 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Cart
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={`${item.name} - ${item.quantity} x $${item.price}`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">
        Total: ${total}
      </Typography>
      <Button variant="contained" color="primary">
        Proceed to Checkout
      </Button>
    </Container>
  );
}

export default Cart;
