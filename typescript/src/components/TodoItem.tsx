import type { FC } from 'react';

const TodoItem: FC<{ text: string }> = ({ text }) => {
  return <li>{ text }</li>;
};

export default TodoItem;
