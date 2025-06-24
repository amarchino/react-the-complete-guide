import type { FC } from 'react';
import Todos from './components/Todos';

const App: FC = () => {
  return (
    <div>
      <Todos items={ [ 'Learn React', 'Learn Typescript' ] } />
    </div>
  )
}

export default App;
