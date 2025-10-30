import React, { useState } from 'react';
import './App.css';
import { renderTitle } from './Title/Title';
import { renderPasswordInput } from './PasswordInput/PasswordInput';
import { renderValidation } from './PasswordValidation/PasswordValidation';
import { validatePassword } from './PasswordRules/PasswordRules';

function App() {
  const [newPassword, setNewPassword] = useState('');

  const rules = validatePassword(newPassword);
  const isPasswordValid = rules.every((rule) => rule.validate);

  return (
    <div className="App">
      {renderTitle('Password Validator')}
      {renderPasswordInput({
        newPassword,
        onChangeHandler: (e) => setNewPassword(e.target.value),
        onClickHandler: () => setNewPassword(''),
        isPasswordValid,
      })}
      {renderValidation(newPassword)}
    </div>
  );
}

export default App;
