import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const product = { id, name: 'Sample Product', description: 'This is a sample product', price: 100, image: '/static/images/cards/contemplative-reptile.jpg' };

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          alt={product.name}
          height="140"
          image={product.image}
          title={product.name}
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
    </Container>
  );
}

export default ProductDetails;
