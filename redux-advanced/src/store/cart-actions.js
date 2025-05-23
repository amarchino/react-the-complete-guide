import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const sendCartData = cart => {
  return async dispatch => {
    dispatch( uiActions.showNotification({ status: 'pending', title: 'Sending...', message: 'Sending cart data!' }) );
    try {
      const response = await fetch('https://react-redux-learn-fd7e3-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
      });
      if(!response.ok) {
        throw new Error('Sending cart data failed.')
      }
      dispatch( uiActions.showNotification({ status: 'success', title: 'Success!', message: 'Sent cart data successfully!' }) );
    } catch(error) {
      dispatch( uiActions.showNotification({ status: 'error', title: 'Error!', message: error.message || 'Sending cart data failed!' }) )
    }
  };
};

export const fetchCartData = () => {
  return async dispatch => {
    try {
      const response = await fetch('https://react-redux-learn-fd7e3-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
      if(!response.ok) {
        throw new Error('Could not fetch cart data!');
      }
      const cartData = await response.json();
      dispatch(cartActions.replaceCart(cartData));
    } catch(e) {
      dispatch( uiActions.showNotification({ status: 'error', title: 'Error!', message: error.message || 'Fetching cart data failed!' }) )
    }
  };
};
