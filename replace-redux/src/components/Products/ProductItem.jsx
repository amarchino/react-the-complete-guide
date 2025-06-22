import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { toggleFav } from '../../store/actions/products';

export default function ProductItem({ id, isFav, title, description }) {
  const dispatch = useDispatch();

  const toggleFavHandler = () => {
    dispatch(toggleFav(id));
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
