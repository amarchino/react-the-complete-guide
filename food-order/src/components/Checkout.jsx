import { useContext } from 'react';
import Modal from './ui/Modal';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Input from './ui/Input';
import Button from './ui/Button';
import UserProgressContext from '../store/UserProgressContext';

export default function Checkout() {
  const { items } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);
  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
  }

  return (
    <Modal open={ progress === 'checkout' } onClose={ hideCheckout }>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total amount: { currencyFormatter.format(cartTotal) }</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button textOnly type="button" onClick={ hideCheckout }>Close</Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
