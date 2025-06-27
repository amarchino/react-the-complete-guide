import { useState, type ChangeEvent, type FC, type FormEvent } from 'react';
import classes from './NewPost.module.css';
import type { PostDTO } from '../model/PostDTO';
import Modal from '../components/Modal';

const NewPost: FC<{ onCancel: () => void, onAddPost: (post: PostDTO) => void }> = ({ onCancel, onAddPost }) => {
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');
  function bodyChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const postData: PostDTO = {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal onClose={onCancel}>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={authorChangeHandler} />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
