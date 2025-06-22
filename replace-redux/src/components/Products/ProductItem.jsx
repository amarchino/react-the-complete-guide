import { useContext } from 'react';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { ProductsContext } from '../../context/products-context';

export default function ProductItem({ id, isFav, title, description }) {
  const { toggleFavorite } = useContext(ProductsContext);

  const toggleFavHandler = () => {
    toggleFavorite(id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className={classes.productItem}>
        <h2 className={isFav ? 'is-fav' : ''}>{title}</h2>
        <p>{description}</p>
        <button className={!isFav ? 'button-outline' : ''} onClick={toggleFavHandler}>
          {isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};
