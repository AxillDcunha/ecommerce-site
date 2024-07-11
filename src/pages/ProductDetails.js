import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const product = { id, name: 'Sample Product', description: 'This is a sample product', price: 100, image: 'https://i5.walmartimages.com/asr/2fc16c30-2c0c-4174-90e7-7c677a013793_1.ffd60f9dd8c1fd7ff53121210743eb59.jpeg' };

  return (
    <Container>
      <Box sx={{ marginTop: 8 }}> {/* Adjust the margin as needed */}
        <Card>
          <CardMedia
            component="img"
            alt={product.name}
            height="140"
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
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Card>
      </Box>
    </Container>
  );
}

export default ProductDetails;
