import * as React from 'react';

export const Login = (props) => {
  const {loginDraft, updateLoginEmail, updateLoginPassword, login} = props;

  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          login(loginDraft);
        }}
      >
        <div>
          <label>email</label>
          <input
            type="text"
            value={loginDraft.email}
            onChange={(e) => updateLoginEmail(e.target.value)}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            value={loginDraft.password}
            onChange={(e) => updateLoginPassword(e.target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};
