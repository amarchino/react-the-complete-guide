import { createContext, useState } from 'react';

const UserProgressContext = createContext({
  progress: '',
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {}
});

export function UserProgressContextProvider({ children }) {
  const [ userProgress, setUserProgress ] = useState('');
  const userProgressContext = {
    progress: userProgress,
    showCart: () => setUserProgress('cart'),
    hideCart: () => setUserProgress(''),
    showCheckout: () => setUserProgress('checkout'),
    hideCheckout: () => setUserProgress(''),
  };

  return (
    <UserProgressContext value={userProgressContext}>{ children }</UserProgressContext>
  );
}

export default UserProgressContext;
