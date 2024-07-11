import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const product = { id, name: 'DELL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: 100, image: 'https://i5.walmartimages.com/asr/2fc16c30-2c0c-4174-90e7-7c677a013793_1.ffd60f9dd8c1fd7ff53121210743eb59.jpeg' };

  return (
    <Container>
      <Box sx={{ marginTop: 8 }}> {/* Adjust the margin as needed */}
        <Card>
          <CardMedia
            component="img"
            alt={product.name}
            height="260"
            image={product.image}
            title={product.name}
            sx={{ objectFit: 'contain' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price}
            </Typography>
          </CardContent>
          <Button sx={{margin:"12px"}}variant="contained" color="primary">
            Add to Cart
          </Button>
        </Card>
      </Box>
    </Container>
  );
}

export default ProductDetails;
