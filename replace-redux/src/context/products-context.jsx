import { createContext, useState } from 'react';

export const ProductsContext = createContext({
  products: [],
  toggleFavorite: id => {}
});

export default function ProductsContextProvider({ children }) {
  const [ productsList, setProductsList ] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ]);
  function toggleFavorite(id) {
    setProductsList(currentProductList => {
      return currentProductList.map(el => ({
        ...el,
        isFavorite: el.id === id ? !el.isFavorite : el.isFavorite
      }))
    });
  }
  return (
    <ProductsContext value={{ products: productsList, toggleFavorite }}>
      { children }
    </ProductsContext>
  );
}
