import { useState, type ChangeEvent, type FC, type FormEvent } from 'react';
import classes from './NewPost.module.css';
import type { PostDTO } from '../model/PostDTO';
import Modal from '../components/Modal';
import { Link, useNavigate } from 'react-router-dom';

const NewPost: FC<{ onAddPost: (post: PostDTO) => void }> = ({ onAddPost }) => {
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');
  const navigate = useNavigate();
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
    navigate('/')
  }

  return (
    <Modal>
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
          <Link to="/" type='button'>Cancel</Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
