import type { FC } from 'react';
import classes from './TodoItem.module.css';

const TodoItem: FC<{ text: string, onRemoveTodo: () => void }> = ({ text, onRemoveTodo }) => {
  return <li className={classes.item} onClick={onRemoveTodo}>{ text }</li>;
};

export default TodoItem;
