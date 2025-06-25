import type { FC } from 'react';
import type { Todo } from '../models/Todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = ({ items, onRemoveTodo }) => {
  return (
    <ul className={classes.todos}>
      { items.map(item => <TodoItem key={ item.id } text={ item.text } onRemoveTodo={() => onRemoveTodo(item.id)} />) }
    </ul>
  );
}

export default Todos;
