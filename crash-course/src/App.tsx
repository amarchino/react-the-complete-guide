import type { FC } from 'react';
import Post from './components/Post';

const App: FC = () => {
  return <main>
    <Post />
    <Post />
    <Post />
    <Post />
  </main>;
}

export default App;
