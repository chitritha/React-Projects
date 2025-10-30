import React from 'react';

import { validatePassword } from '../PasswordRules/PasswordRules';

export function renderValidation(password) {
  const rules = validatePassword(password);

  return (
    <div className="RulesList">
      <h3>Your password must contain:</h3>
      {rules.map((rule) => (
        <div key={rule.id} className={rule.validate ? 'valid' : 'invalid'}>
          {rule.validate ? '✅' : '❌'} {rule.rule}
          {rule.subRules && (
            <div className="SubRules">
              {rule.subRules.map((sub) => (
                <p key={sub.id} className={sub.validate ? 'valid' : 'invalid'}>
                  {sub.validate ? '✅' : '❌'} {sub.rule}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
