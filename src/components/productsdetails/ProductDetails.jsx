import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function ProductDetails(props) {
  // Get the 'id' parameter from the URL
  let { id } = useParams();

  // State to store the product details
  const [product, setProduct] = useState({});

  // Fetch product details from the server when the component mounts or when 'id' changes
  useEffect(() => {
    // Using the fetch API to get the details of a specific product based on the 'id'
    fetch(`http://localhost:3444/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error('Error in loading product:', err));
  }, [id]);

  // Show a spinner while product details are being loaded
  if (!product.details) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading the Product...</span>
      </div>
    );
  }

  // Render the product details once loaded
  return (
    <>
      {/* Title for the product details section */}
      <h2 className='text-center'>Product details</h2>

      {/* Card component from react-bootstrap to display product details */}
      <Card className='w-25 m-auto p-3'>
        {/* Product image */}
        <Card.Img variant='top' src={product.image} alt={product.name} className='p-3' />

        {/* Product title */}
        <Card.Title>{product.name}</Card.Title>

        {/* Product details */}
        <Card.Body className='p-3'>
          <Card.Text>Price: ₹{product.price}</Card.Text>
          <Card.Text>EMI: ₹{product.details.emi} per month</Card.Text>
          <Card.Text>Brand: {product.details.brand}</Card.Text>
          <Card.Text>Model: {product.details.model}</Card.Text>
          <Card.Text>Operating System: {product.details.OS}</Card.Text>
          <Card.Text>Color: {product.details.color}</Card.Text>
          <Card.Text>Network: {product.details.network}</Card.Text>

          {/* Button to add the product to the cart */}
          <button className='btn btn-outline-success' onClick={() => props.addToCart(product)}>
            Add to cart
          </button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductDetails;
