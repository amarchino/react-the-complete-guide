import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import classes from  './Products.module.css';

export default function Products() {
  const productList = useSelector(state => state.shop.products);
  return (
    <ul className={classes.productsList}>
      {productList.map(prod => (
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
