// Imports
import Checkout from './components/checkoutproduct/Checkout';
import ProductDetails from './components/productsdetails/ProductDetails';
import ProductList from './components/productslist/ProductList';
import ShoppingCart from './components/shoppingcart/ShoppingCart';
import RootLayout from './RootLayout';
import ErrorElement from './ErrorElement';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import ThankYou from './components/thankyou/ThankYou';

const App = () => {
  // State to manage the cart items and count
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Function for adding a product to the cart
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    setCartCount(cartCount + 1);
  };

  // Function to update the quantity of a cart item
  const updateCartItem = (productId, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Function to remove a cart item
  const removeCartItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    setCartCount(cartCount - 1);
  };

  // Create a BrowserRouter object with routes
  const routeObj = createBrowserRouter([
    {
      path: '/',
      // RootLayout component with a cartCount prop
      element: <RootLayout cartCount={cartCount} />,
      errorElement: <ErrorElement />,
      children: [
        {
          path: '/',
          // ProductList component with addToCart prop
          element: <ProductList addToCart={addToCart} />,
        },
        {
          path: '/product/:id',
          // ProductDetails component with addToCart prop
          element: <ProductDetails addToCart={addToCart} />,
        },
        {
          path: '/cart',
          // ShoppingCart component with updateCartItem, removeCartItem, and cart props
          element: <ShoppingCart updateCartItem={updateCartItem} removeCartItem={removeCartItem} cart={cart} />,
        },
        {
          path: '/checkout',
          // Checkout component with cart prop
          element: <Checkout cart={cart} />,
        },
        {
          path: '/thank-you',
          // ThankYou component
          element: <ThankYou />,
        },
      ],
    },
  ]);

  // Render the RouterProvider with the created BrowserRouter object
  return <RouterProvider router={routeObj} />;
};

// Export the App component
export default App;
