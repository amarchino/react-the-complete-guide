import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import classes from  './Products.module.css';
import { useContext } from 'react';
import { ProductsContext } from '../context/products-context';

export default function Products() {
  const { products } = useContext(ProductsContext);
  return (
    <ul className={classes.productsList}>
      {products.map(prod => (
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
