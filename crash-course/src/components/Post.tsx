import type { FC } from 'react';
import classes from './Post.module.css';

const Post: FC<{ author: string, body: string }> = ({ author, body }) => {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{ author }</p>
      <p className={classes.text}>{ body }</p>
    </div>
  );
};

export default Post;
