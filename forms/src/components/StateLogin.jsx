import { useState } from 'react';
import Input from './Input';
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation';

export default function StateLogin() {
  const [ enteredValues, setEnteredValues ] = useState({
    email: '',
    password: ''
  });
  const [ didEdit, setDidEdit ] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = didEdit.email && isNotEmpty(enteredValues.email) && !isEmail(enteredValues.email);
  const passwordIsInvalid = didEdit.password && isNotEmpty(enteredValues.password) && !hasMinLength(enteredValues.password, 6);

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
        <Input label="Email" id="email" type="email" name="email" value={enteredValues.email} onChange={event => handleInputChange('email', event.target.value)} onBlur={() => handleInputBlur('email')} error={emailIsInvalid && 'Please enter a valid email'} />
        <Input label="Password" id="password" type="password" name="password" value={enteredValues.password} onChange={event => handleInputChange('password', event.target.value)} onBlur={() => handleInputBlur('password')} error={passwordIsInvalid && 'Please enter a valid password'} />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
