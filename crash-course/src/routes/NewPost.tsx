import { type FC } from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Form, Link } from 'react-router-dom';

const NewPost: FC = () => {

  return (
    <Modal>
      <Form method='POST' className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to="/" type='button'>Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
