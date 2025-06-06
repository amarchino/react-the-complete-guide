import { useContext } from 'react';
import Modal from './ui/Modal';
import Button from './ui/Button';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting'
import UserProgressContext from '../store/UserProgressContext';
import CartItem from '../CartItem';

export default function Cart() {
  const { items } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <Modal className="cart" open={progress === 'cart'} onClose={ progress === 'cart' ? hideCart : null }>
      <h2>Your Cart</h2>
      <ul>
        { items.map(item => <CartItem key={item.id} item={item} />) }
      </ul>
      <p className="cart-total">{ currencyFormatter.format(cartTotal) }</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>Close</Button>
        { items.length > 0 && <Button onClick={showCheckout}>Go to Checkout</Button> }
      </p>
    </Modal>
  );
}
