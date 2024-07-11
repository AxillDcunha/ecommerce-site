import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import bannerImage from './assets/1.webp'

const electronicItems = [
  {
    title: 'Smartphone',
    description: 'Latest model with advanced features.',
    price: '$699',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Laptop',
    description: 'High performance for work and play.',
    price: '$999',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Smartwatch',
    description: 'Track your fitness and stay connected.',
    price: '$199',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Headphones',
    description: 'High-quality sound and noise cancellation.',
    price: '$299',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Tablet',
    description: 'Portable and powerful for on-the-go use.',
    price: '$499',
    image: 'https://via.placeholder.com/150',
  },
];

const Home = () => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <img src={bannerImage} alt="Banner" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      </Box>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Top Electronic Items
        </Typography>
        <Grid container spacing={4}>
          {electronicItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
