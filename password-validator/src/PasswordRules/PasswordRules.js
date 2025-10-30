export function validatePassword(password = '') {
  const subRules = [
    { id: 2.1, rule: 'Lowercase letters (a-z)', check: (p) => /[a-z]/.test(p) },
    { id: 2.2, rule: 'Uppercase letters (A-Z)', check: (p) => /[A-Z]/.test(p) },
    { id: 2.3, rule: 'Numbers (0-9)', check: (p) => /[0-9]/.test(p) },
    { id: 2.4, rule: 'Special characters (ex. !@#)', check: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
  ];

  const baseRules = [
    {
      id: 1,
      rule: 'At least 10 characters in length',
      check: (p) => p.length >= 10,
    },
    {
      id: 2,
      rule: 'At least 3 of the following:',
      check: (p, subRules) => subRules.filter((r) => r.validate).length >= 3,
      subRules,
    },
    {
      id: 3,
      rule: 'No more than 2 identical characters in a row',
      check: (p) => !/(.)\1\1/.test(p),
    },
  ];

  return baseRules.map((rule) => {
    const updatedSubRules = rule.subRules?.map((sub) => ({
      ...sub,
      validate: password ? sub.check(password) : false,
    }));

    const validate = password ? rule.check(password, updatedSubRules) : false;

    return { ...rule, validate, subRules: updatedSubRules };
  });
}
