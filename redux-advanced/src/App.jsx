import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

function App() {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch('https://react-redux-learn-fd7e3-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    });
  }, [ cart ]);

  return (
    <Layout>
      { cartIsVisible && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
