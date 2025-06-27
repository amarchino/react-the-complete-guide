import type { FC } from 'react';
import classes from './Post.module.css';
import type { PostDTO } from '../model/PostDTO';

const Post: FC<PostDTO> = ({ author, body }) => {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{ author }</p>
      <p className={classes.text}>{ body }</p>
    </div>
  );
};

export default Post;
