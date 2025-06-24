import type { FC } from 'react';
import type { Todo } from '../models/Todo';

const Todos: FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      { items.map(item => <li key={ item.id }>{ item.text }</li>) }
    </ul>
  );
}

export default Todos;
