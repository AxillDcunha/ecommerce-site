import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const OrderHistory = () => {
  const orders = [
    { id: 1, date: '2024-07-01', total: 100 },
    { id: 2, date: '2024-07-02', total: 200 },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Order History
      </Typography>
      <List>
        {orders.map((order) => (
          <ListItem key={order.id}>
            <ListItemText primary={`Order #${order.id} - $${order.total}`} secondary={order.date} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default OrderHistory;
