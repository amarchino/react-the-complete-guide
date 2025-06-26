import type { FC } from 'react';
import Post from './components/Post';

const App: FC = () => {
  return <main>
    <Post author='Maximilian' body='React.js is awesome!' />
    <Post author='Manuel' body='Check out the full course!' />
  </main>;
}

export default App;
