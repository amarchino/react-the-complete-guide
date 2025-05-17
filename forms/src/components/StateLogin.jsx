import { useState } from 'react';

export default function StateLogin() {
  const [ enteredValues, setEnteredValues ] = useState({
    email: '',
    password: ''
  });
  const [ didEdit, setDidEdit ] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('User values: ', enteredValues);
  }
  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
    setDidEdit(prevValues => ({
      ...prevValues,
      [identifier]: false
    }))
  }
  function handleInputBlur(identifier) {
    setDidEdit(prevValues => ({
      ...prevValues,
      [identifier]: true
    }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={enteredValues.email} onChange={event => handleInputChange('email', event.target.value)} onBlur={() => handleInputBlur('email')} />
          <div className="control-error">{ emailIsInvalid && <p>Please enter a valid email address</p> }</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={enteredValues.password} onChange={event => handleInputChange('password', event.target.value)} onBlur={() => handleInputBlur('password')} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
