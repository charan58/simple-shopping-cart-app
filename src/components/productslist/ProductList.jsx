import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function ProductList(props) {
  // State to store the list of products
  const [products, setProducts] = useState([]);

  // Fetch products from the server when the component mounts
  useEffect(() => {
    // Using the fetch API to get the list of products from the server
    fetch('http://localhost:3444/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      {/* Title for the product list */}
      <h3 className='text-center'>Products</h3>

      {/* Display products in a row */}
      <div className='row p-2'>
        {products ? (
          // Map through the list of products and render each product card
          products.map((product) => (
            <div key={product.name} className='col-md-4 mb-3'>
              {/* Product Card from react-bootstrap */}
              <Card style={{boxShadow:"5px 5px black"}}>
                {/* Product image */}
                <Card.Img src={product.image} alt={product.name} className='w-50 p-2 m-auto' />

                {/* Product details */}
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ₹{product.price}</Card.Text>

                  {/* Link to navigate to product details page */}
                  <Link to={`/product/${product.id}`} className='nav-link'>
                    Click here for Details
                  </Link>
                  <br />

                  {/* Button to add product to the cart */}
                  <Button className='' onClick={() => props.addToCart(product)} >
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          // Show a spinner if products are still loading
          <div class="spinner-border" role="status">
            <span class="sr-only">Please wait, products are still Loading...</span>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductList;
