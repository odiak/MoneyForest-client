import * as React from 'react';

import {FormGroup} from './FormGroup';
import {FormLabel} from './FormLabel';
import {FormContent} from './FormContent';

export const Registration = ({registrationDraft, updateRegistrationDraft, register}) => {
  return (
    <div>
      <h2>Register</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
      >
        <FormGroup>
          <FormLabel>name</FormLabel>
          <FormContent>
            <input
              type="text"
              value={registrationDraft.userName}
              onChange={(e) => updateRegistrationDraft('userName', e.target.value)}
            />
          </FormContent>
        </FormGroup>
        <FormGroup>
          <FormLabel>email</FormLabel>
          <FormContent>
            <input
              type="text"
              value={registrationDraft.email}
              onChange={(e) => updateRegistrationDraft('email', e.target.value)}
            />
          </FormContent>
        </FormGroup>
        <FormGroup>
          <FormLabel>password</FormLabel>
          <FormContent>
            <input
              type="password"
              value={registrationDraft.password}
              onChange={(e) => updateRegistrationDraft('password', e.target.value)}
            />
          </FormContent>
        </FormGroup>
        <FormGroup>
          <FormContent>
            <button type="submit">register</button>
          </FormContent>
        </FormGroup>
      </form>
    </div>
  );
};
