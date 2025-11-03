import React from 'react';

export function renderPasswordInput({ newPassword, onChangeHandler, onClickHandler, isPasswordValid }) {
  return (
    <div className="PasswordBox">
      <input
        type="text"
        value={newPassword}
        onChange={onChangeHandler}
        placeholder="Enter new password to validate"
      />
      <button
        onClick={onClickHandler}
        disabled={!isPasswordValid}
        className={isPasswordValid ? 'active' : 'disabled'}
      >
        Reset Password
      </button>
    </div>
  );
}
