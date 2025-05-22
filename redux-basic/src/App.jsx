import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(store => store.auth.isAuthenticated);

  return (
    <>
      <Header />
      { !isAuthenticated ? <Auth /> : <UserProfile /> }
      <Counter />
    </>
  );
}

export default App;
