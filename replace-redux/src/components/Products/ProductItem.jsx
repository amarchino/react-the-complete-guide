import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import useStore from '../../hooks-store/store';

export default function ProductItem({ id, isFav, title, description }) {
  const [ _, dispatch ] = useStore(false);

  const toggleFavHandler = () => {
    dispatch('TOGGLE_FAV', id);
  };
  console.log(title, isFav)

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className={classes.productItem}>
        <h2 className={isFav ? classes.isFav : undefined}>{title}</h2>
        <p>{description}</p>
        <button className={!isFav ? 'button-outline' : ''} onClick={toggleFavHandler}>
          {isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};
