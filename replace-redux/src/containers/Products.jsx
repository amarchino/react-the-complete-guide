import ProductItem from '../components/Products/ProductItem';
import classes from  './Products.module.css';
import useStore from '../hooks-store/store';

export default function Products() {
  const [ state ] = useStore();
  return (
    <ul className={classes.productsList}>
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
}
