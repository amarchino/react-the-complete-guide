import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const  MainHeader: FC<{ onCreatePost: () => void }> = ({ onCreatePost }) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
