import * as React from 'react';

import {FormGroup} from './FormGroup';
import {FormLabel} from './FormLabel';
import {FormContent} from './FormContent';

export const NewAccount = (props) => (
  <div>
    <h2>New Account</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.createNewAccount();
      }}
    >
      <FormGroup>
        <FormLabel>name</FormLabel>
        <FormContent>
          <input
            type="text"
            value={props.accountDraft.name}
            onChange={(e) => props.updateAccountDraft('name', e.target.value)}
          />
        </FormContent>
      </FormGroup>
      <FormGroup>
        <FormLabel>description</FormLabel>
        <FormContent>
          <textarea
            value={props.accountDraft.description}
            onChange={(e) => props.updateAccountDraft('description', e.target.value)}
          />
        </FormContent>
      </FormGroup>
      <FormGroup>
        <FormLabel>account type</FormLabel>
        <FormContent>
          <input
            type="text"
            value={props.accountDraft.accountType}
            onChange={(e) => props.updateAccountDraft('accountType', e.target.value)}
          />
        </FormContent>
      </FormGroup>
      <FormGroup>
        <FormLabel>manage balance</FormLabel>
        <FormContent>
          <input
            type="checkbox"
            checked={props.accountDraft.hasBalance}
            onChange={(e) => props.updateAccountDraft('hasBalance', e.target.checked)}
          />
        </FormContent>
      </FormGroup>
      <FormGroup>
        <FormLabel>balance</FormLabel>
        <FormContent>
          <input
            type="number"
            value={props.accountDraft.balance}
            step="1"
            onChange={(e) => props.updateAccountDraft('balance', parseInt(e.target.value, 10))}
          />
        </FormContent>
      </FormGroup>
      <FormGroup>
        <FormContent>
          <button type="submit">Create New Account</button>
        </FormContent>
      </FormGroup>
    </form>
  </div>
);
