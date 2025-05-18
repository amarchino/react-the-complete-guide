import Input from './Input';
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation';
import { useInput } from '../hooks/useInput';

export default function StateLogin() {
  const { value: emailValue, handleInputBlur: handleEmailBlur, handleInputChange: handleEmailChange, hasError: emailHasError } = useInput('', value => isEmail(value) && isNotEmpty(value));
  const { value: passwordValue, handleInputBlur: handlePasswordBlur, handleInputChange: handlePasswordChange, hasError: passwordHasError } = useInput('', value => isNotEmpty(value) && hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if(emailHasError || passwordHasError) {
      return;
    }
    console.log('User values: ', emailValue, passwordValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" type="email" name="email" autoComplete="email" value={emailValue} onChange={handleEmailChange} onBlur={handleEmailBlur} error={emailHasError && 'Please enter a valid email'} />
        <Input label="Password" id="password" type="password" name="password" autoComplete="current-password" value={passwordValue} onChange={handlePasswordChange} onBlur={handlePasswordBlur} error={passwordHasError && 'Please enter a valid password'} />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
