import { type FC } from 'react';
import Post from './Post';
import classes from './PostsList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList: FC<{ isPosting: boolean, hideModalHandler: () => void }> = ({ isPosting, hideModalHandler }) => {
  return (
    <>
      { isPosting &&
        <Modal onClose={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} />
        </Modal>
      }
      <ul className={classes.posts}>
        <Post author='Manuel' body='Check out the full course!' />
      </ul>
    </>
  );
}

export default PostsList;
