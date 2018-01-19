import * as React from 'react';

import {FormGroup} from './FormGroup';
import {FormLabel} from './FormLabel';
import {FormContent} from './FormContent';

export const Login = ({loginDraft, updateLoginDraft, login}) => {
  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          login();
        }}
      >
        <FormGroup>
          <FormLabel>email</FormLabel>
          <FormContent>
            <input
              type="text"
              value={loginDraft.email}
              onChange={(e) => updateLoginDraft('email', e.target.value)}
            />
          </FormContent>
        </FormGroup>
        <FormGroup>
          <FormLabel>password</FormLabel>
          <FormContent>
            <input
              type="password"
              value={loginDraft.password}
              onChange={(e) => updateLoginDraft('password', e.target.value)}
            />
          </FormContent>
        </FormGroup>
        <FormGroup>
          <FormContent>
            <button type="submit">login</button>
          </FormContent>
        </FormGroup>
      </form>
    </div>
  );
};
