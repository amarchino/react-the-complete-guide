import { type ChangeEventHandler, type FC } from 'react';
import classes from './NewPost.module.css';

const NewPost: FC<{ onBodyChange: ChangeEventHandler, onAuthorChange: ChangeEventHandler, onCancel: () => void }> = ({ onBodyChange, onAuthorChange, onCancel }) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
