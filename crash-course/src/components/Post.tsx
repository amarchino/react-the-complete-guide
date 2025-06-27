import type { FC } from 'react';
import classes from './Post.module.css';
import type { PostDTO } from '../model/PostDTO';
import { Link } from 'react-router-dom';

const Post: FC<PostDTO> = ({ author, body, id }) => {
  return (
    <div className={classes.post}>
      <Link to={id!}>
        <p className={classes.author}>{ author }</p>
        <p className={classes.text}>{ body }</p>
      </Link>
    </div>
  );
};

export default Post;
