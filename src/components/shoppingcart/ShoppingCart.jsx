import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ShoppingCart(props) {
  // Function to update the quantity of a cart item and ensure it's not less than 0
  const updateCartItemQuantity = (productId, newQuantity) => {
    if (newQuantity >= 0) {
      props.updateCartItem(productId, newQuantity);
    }
  };

  return (
    <>
      {/* Title for the shopping cart */}
      <h2 className='text-center'>Shopping Cart</h2>

      {/* Display a message and image if the cart is empty */}
      {props.cart.length === 0 && (
        <div className='text-center'>
          <img
            src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png'
            width='100px'
            alt='Empty cart'
          />
          <p>Your cart is empty. Add Items to checkout</p>
        </div>
      )}

      {/* Map through the cart items and display each item in a Card */}
      {props.cart.map((item) => (
        <Card key={item.id} className='m-2' style={{boxShadow:"5px 5px grey"}}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Price: ₹{item.price}</Card.Text>
            <Card.Text>Quantity: {item.quantity}</Card.Text>

            {/* Buttons to update quantity, remove item, and navigate to checkout */}
            <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)} className='btn btn-outline-primary'>
              +
            </button>
            <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)} className='btn btn-outline-secondary m-2'>
              -
            </button>
            <button onClick={() => props.removeCartItem(item.id)} className='btn btn-outline-warning'>
              Remove
            </button>
          </Card.Body>
        </Card>
      ))}

      {/* Display total amount and checkout button if the cart is not empty */}
      {props.cart.length !== 0 && (
        <div>
          <p className='m-2 text-center'>Total: ₹{props.cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          <div className='text-center'>
            <button className='btn btn-outline-info mt-3' type='submit'>
              {/* Link to navigate to the checkout page */}
              <Link to='/checkout' className='nav-link'>
                Checkout order
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
