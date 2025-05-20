import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext';
import Button from './ui/Button';

export default function Header() {
  const { items } = useContext(CartContext);
  const totalCartItems = items.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({ totalCartItems })</Button>
      </nav>
    </header>
  );
}
