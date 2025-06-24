import type { FC } from 'react';

const Todos: FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul>
      { items.map(item => <li key={ item }>{ item }</li>) }
    </ul>
  );
}

export default Todos;
