import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import bannerImage from './assets/1.webp'

const electronicItems = [
  {
    title: 'Smartphone',
    description: 'Latest model with advanced features.',
    price: '$699',
    image: 'https://i5.walmartimages.com/asr/199ab764-f112-4508-888c-86a1094624e8.17daf90b726900a539a8b9873fdea1f5.jpeg',
  },
  {
    title: 'Laptop',
    description: 'High performance for work and play.',
    price: '$999',
    image: 'https://th.bing.com/th/id/OIP.jYMr9yT6jN6u0sqNQf-HjwAAAA?rs=1&pid=ImgDetMain',
  },
  {
    title: 'Smartwatch',
    description: 'Track your fitness and stay connected.',
    price: '$199',
    image: 'https://th.bing.com/th/id/R.9584d55590a39c6f212d3df13891ccd5?rik=F9ZGN6wiD4KDGg&pid=ImgRaw&r=0',
  },
  {
    title: 'Headphones',
    description: 'High-quality sound and noise cancellation.',
    price: '$299',
    image: 'https://th.bing.com/th/id/OIP.3poA0gmpWP193FtDt2alegHaHa?rs=1&pid=ImgDetMain',
  },
  {
    title: 'Tablet',
    description: 'Portable and powerful for on-the-go use.',
    price: '$499',
    image: 'https://images.pcliquidations.com/images/isaac/122/122099.jpg',
  },
];

const Home = () => {
  return (
    <>
      <Box  sx={{ height: "30%" }}>
        <img src={"https://static.vecteezy.com/system/resources/previews/002/478/302/original/sale-electronics-banner-background-free-vector.jpg"} alt="Banner" style={{ width: '100%', height: "600px", objectFit: 'cover' }} />
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
                  height="240"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'contain' }}
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
