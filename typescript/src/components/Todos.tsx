import type { FC } from 'react';
import type { Todo } from '../models/Todo';
import TodoItem from './TodoItem';

const Todos: FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      { items.map(item => <TodoItem key={ item.id } text={ item.text } />) }
    </ul>
  );
}

export default Todos;
