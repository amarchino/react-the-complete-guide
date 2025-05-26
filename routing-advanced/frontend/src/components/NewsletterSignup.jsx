import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

export default function NewsletterSignup() {
  const { data, state, Form } = useFetcher();

  useEffect(() => {
    if(state === 'idle' && data && data.message) {
      alert(data.message);
    }
  }, [ data, state ]);

  return (
    <Form method="POST" action="/newsletter" className={classes.newsletter}>
      <input type="email" name="email" placeholder="Sign up for newsletter..." aria-label="Sign up for newsletter" />
      <button>Sign up</button>
    </Form>
  );
}
