import React from 'react';
import { Form, Container, Col, Row, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout(props) {
  // State to manage shipping details and errors
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    mobile: ''
  });

  const [error, setError] = useState({
    name: '',
    address: '',
    mobile: ''
  });

  const navigate = useNavigate();

  // Handle input changes in the form
  const handleInputChange = (shippingObj) => {
    setShippingDetails({
      ...shippingDetails,
      [shippingObj.target.name]: shippingObj.target.value
    });
  };

  // Validate the form fields
  const validateForm = () => {
    let valid = true;
    const newError = { name: '', address: '', mobile: '' };

    // Validate name
    if (!shippingDetails.name.trim()) {
      newError.name = 'Name is required';
      valid = false;
    }

    // Validate address
    if (!shippingDetails.address.trim()) {
      newError.address = 'Address is required';
      valid = false;
    }

    // Validate mobile number
    const mobileNumber = shippingDetails.mobile.trim();
    if (!/^\d+$/.test(mobileNumber) || mobileNumber.length < 10) {
      newError.mobile = 'Mobile number must be 10 digits';
      valid = false;
    }

    setError(newError);
    return valid;
  };

  // Handle the form submission
  const confirmOrder = (formObj) => {
    if (validateForm()) {
      navigate('/thank-you');
    }
  };

  return (
    <Container>
      {/* Title for the checkout order */}
      <h3>Checkout order</h3>

      {/* Form and order summary */}
      <Row>
        {/* Shipping details form */}
        <Col md={6} style={{boxShadow:"5px 5px grey",borderRadius:"10px"}} className='p-3'>
          <Form onSubmit={confirmOrder}>
            {/* Name input field */}
            <Form.Group controlId='formName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your name'
                name='name'
                value={shippingDetails.name}
                onChange={handleInputChange}
                isInvalid={!!error.name}
                required
                className='mb-3'
              />
              <Form.Control.Feedback type='invalid'>
                {error.name}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Address input field */}
            <Form.Group controlId='formAddress'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter your Address'
                name='address'
                value={shippingDetails.address}
                onChange={handleInputChange}
                isInvalid={!!error.address}
                required
                className='mb-3'
              />
              <Form.Control.Feedback type='invalid'>
                {error.address}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Mobile number input field */}
            <Form.Group controlId='formNumber'>
              <Form.Label>Mobile number</Form.Label>
              <Form.Control
                type='tel'
                placeholder='Enter your contact number'
                name='mobile'
                value={shippingDetails.mobile}
                onChange={handleInputChange}
                isInvalid={!!error.mobile}
                required
                className='mb-3'
              />
              <Form.Control.Feedback type='invalid'>
                {error.mobile}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit button */}
            <button className='btn btn-outline-success mt-2' onClick={confirmOrder} type='submit'>
              Confirm your Order
            </button>
          </Form>
        </Col>

        {/* Order summary */}
        <Col md={6}>
          <div>
            {/* Title for the order summary section */}
            <h3>Order summary</h3>

            {/* Map through the cart items and display each item in a Card */}
            {props.cart.map((item) => (
              <Card key={item.id} className='p-3 m-3' style={{boxShadow:"5px 5px grey"}}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Body>
                  <Card.Text>Price: ₹{item.price}</Card.Text>
                  <Card.Text>Quantity: {item.quantity}</Card.Text>
                </Card.Body>
              </Card>
            ))}

            {/* Display the total amount to be paid */}
            <p className='m-3'>Total amount to be paid: ₹{props.cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
