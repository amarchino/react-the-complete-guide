import { useContext, useActionState } from 'react';
import Modal from './ui/Modal';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Input from './ui/Input';
import Button from './ui/Button';
import Error from './Error';
import UserProgressContext from '../store/UserProgressContext';
import useHttp from '../hook/useHttp';

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

export default function Checkout() {
  const { items, clearCart } = useContext(CartContext);
  const { progress, hideCheckout, } = useContext(UserProgressContext);
  const { data, error, sendRequest, clearData } = useHttp('http://localhost:3000/orders', requestConfig);

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  async function checkoutAction(prevState, formData) {
    const customerData = Object.fromEntries(formData.entries());

    await sendRequest(JSON.stringify({
      order: {
        items,
        customer: customerData
      }
    }));
  }
  const [ formState, formAction, isSending ] = useActionState(checkoutAction, null);

  function handleFinish() {
    clearCart();
    clearData();
    hideCheckout();
  }
  let actions = <>
      <Button textOnly type="button" onClick={ hideCheckout }>Close</Button>
      <Button>Submit Order</Button>
    </>;
  if(isSending) {
    actions = <span>Sending order data...</span>
  }
  if(data && !error) {
    return <Modal open={progress === 'checkout'} onClose={ handleFinish }>
      <h2>Success!</h2>
      <p>Your order was submitted successfully</p>
      <p>We will get back to you with more details via email within the next few minutes</p>
      <p className="modal-actions">
        <Button onClick={ handleFinish }>Okay</Button>
      </p>
    </Modal>
  }

  return (
    <Modal open={ progress === 'checkout' } onClose={ hideCheckout }>
      <form action={ formAction }>
        <h2>Checkout</h2>
        <p>Total amount: { currencyFormatter.format(cartTotal) }</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        { error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{ actions }</p>
      </form>
    </Modal>
  );
}
