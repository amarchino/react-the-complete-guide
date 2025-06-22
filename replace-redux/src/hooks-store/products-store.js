import { initStore } from './store';

const productList = [
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
]

export default function configureStore() {
  const actions = {
    TOGGLE_FAV: (currState, productId) => ({ products: currState.products.map(el => ({
        ...el,
        isFavorite: el.id === productId ? !el.isFavorite : el.isFavorite
      }))
    })
  };
  initStore(actions, { products: productList });
}
