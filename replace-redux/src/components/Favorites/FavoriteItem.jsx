import Card from '../UI/Card';
import classes from './FavoriteItem.module.css';

export default function FavoriteItem({ title, description }) {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className={classes.favoriteItem}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  );
};
