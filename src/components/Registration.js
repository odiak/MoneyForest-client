import * as React from 'react';

export const Registration = (props) => {
  const {
    registrationDraft,
    updateRegistrationUserName,
    updateRegistrationEmail,
    updateRegistrationPassword,
    register,
  } = props;

  return (
    <div>
      <h2>Register</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register(registrationDraft);
        }}
      >
        <div>
          <label>name</label>
          <input
            type="text"
            value={registrationDraft.userName}
            onChange={(e) => updateRegistrationUserName(e.target.value)}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            value={registrationDraft.email}
            onChange={(e) => updateRegistrationEmail(e.target.value)}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            value={registrationDraft.password}
            onChange={(e) => updateRegistrationPassword(e.target.value)}
          />
        </div>
        <button type="submit">register</button>
      </form>
    </div>
  );
};
