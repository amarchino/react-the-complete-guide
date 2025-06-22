import FavoriteItem from '../components/Favorites/FavoriteItem';
import classes from './Products.module.css';
import useStore from '../hooks-store/store';

export default function Favorites() {
  const [ state ] = useStore();
  const favoriteProducts = state.products.filter(p => p.isFavorite);

  let content = <p className={classes.placeholder}>Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className={classes.productsList}>
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};
