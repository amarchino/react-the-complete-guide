import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch( uiActions.showNotification({ status: 'pending', title: 'Sending...', message: 'Sending cart data!' }) );
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
    }
    if(isInitial) {
      isInitial = false;
      return;
    }
    sendCartData()
      .catch(error => dispatch( uiActions.showNotification({ status: 'error', title: 'Error!', message: error.message || 'Sending cart data failed!' }) ));
  }, [ cart, dispatch ]);

  return (
    <>
      { notification && <Notification status={notification.status} title={notification.title} message={notification.message} /> }
      <Layout>
        { cartIsVisible && <Cart /> }
        <Products />
      </Layout>
    </>
  );
}

export default App;
