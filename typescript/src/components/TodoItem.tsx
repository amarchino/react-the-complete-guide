import type { FC } from 'react';
import classes from './TodoItem.module.css';

const TodoItem: FC<{ text: string }> = ({ text }) => {
  return <li className={classes.item}>{ text }</li>;
};

export default TodoItem;
