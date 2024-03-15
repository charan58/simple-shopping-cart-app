import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

// URL for the animated image
const animatedImage = 'https://media1.giphy.com/media/Aik2hwXn0dUTrVkbIP/giphy.gif?cid=6c09b952l1wko5gedwz49xvs8jzzevra06yai6htxjaz79wz&ep=v1_stickers_related&rid=giphy.gif&ct=s';

function ThankYou() {
  // State to control the visibility of the thank you message
  const [showMessage, setShowMessage] = useState(false);

  // Animation configuration for the image
  const imageAnimation = useSpring({
    opacity: showMessage ? 1 : 0,
    transform: showMessage ? 'translateY(0)' : 'translateY(20px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 500 },
  });

  // Effect to set showMessage to true after the component is mounted
  useEffect(() => {
    setShowMessage(true);
  }, []);

  return (
    <div className='text-center'>
      {/* Animated image with spring animation */}
      <animated.div style={imageAnimation}>
        <img src={animatedImage} alt="Order placed" style={{ width: '100%', maxWidth: '300px' }} />
      </animated.div>

      {/* Thank you message with spring animation */}
      <animated.div style={{ ...imageAnimation, marginTop: '20px' }}>
        <h2>Thank you for choosing us. Your order has been placed successfully!</h2>
        <p>
          To redirect to the product store, click{' '}
          <span>
            {/* Link to navigate back to the product store */}
            <Link to="/" className="nav-link">
              here
            </Link>
          </span>
        </p>
      </animated.div>
    </div>
  );
}

export default ThankYou;
