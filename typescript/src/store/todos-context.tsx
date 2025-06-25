import { createContext, useState, type FC, type ReactNode } from 'react';
import { Todo } from '../models/Todo';

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {}
});

const TodosContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [ items, setItems ] = useState<Todo[]>([ new Todo('Learn React'), new Todo('Learn Typescript') ]);
  function addTodo(text: string) {
    setItems(prevTodos => [ ...prevTodos, new Todo(text) ]);
  }
  function removeTodo(id: string) {
    setItems(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  const ctx: TodoContextObj = { items, addTodo, removeTodo };

  return (<TodosContext value={ctx}>
    { children }
  </TodosContext>)
};
export default TodosContextProvider;
