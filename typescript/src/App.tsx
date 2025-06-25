import { useState, type FC } from 'react';
import Todos from './components/Todos';
import { Todo } from './models/Todo';
import NewTodo from './components/NewTodo';

const App: FC = () => {
  const [ todos, setTodos ] = useState<Todo[]>([ new Todo('Learn React'), new Todo('Learn Typescript') ]);

  function onAddTodo(text: string) {
    setTodos(prevTodos => [ ...prevTodos, new Todo(text) ]);
  }

  return (
    <div>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={ todos } />
    </div>
  )
}

export default App;
