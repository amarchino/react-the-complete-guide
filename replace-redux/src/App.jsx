import { Route } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
      </main>
    </>
  );
}
