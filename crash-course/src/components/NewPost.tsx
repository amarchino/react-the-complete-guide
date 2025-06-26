import { useState, type ChangeEvent, type FC } from 'react';
import classes from './NewPost.module.css';

const NewPost: FC = () => {
  const [ enteredBody, setEnteredBody ] = useState('');

  function changeBodyHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{ enteredBody }</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
