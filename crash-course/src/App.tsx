import { useState, type FC } from 'react';
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

const App: FC = () => {
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true)
  }
  function hideModalHandler() {
    setModalIsVisible(false)
  }

  return (
    <main>
      <PostsList isPosting={modalIsVisible} hideModalHandler={hideModalHandler} />
    </main>
  );
}

export default App;
