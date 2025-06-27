import { useState, type ChangeEvent, type FC } from 'react';
import Post from './Post';
import classes from './PostsList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList: FC<{ isPosting: boolean, hideModalHandler: () => void }> = ({ isPosting, hideModalHandler }) => {
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');
  function bodyChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      { isPosting &&
        <Modal onClose={hideModalHandler}>
          <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} onCancel={hideModalHandler} />
        </Modal>
      }
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={ enteredBody } />
        <Post author='Manuel' body='Check out the full course!' />
      </ul>
    </>
  );
}

export default PostsList;
