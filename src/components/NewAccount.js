import * as React from 'react';

export const NewAccount = (props) => (
  <div>
    <h2>New Account</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.createNewAccount(props.accountDraft.toJS());
      }}
    >
      <p>
        name
        <input
          type="text"
          value={props.accountDraft.name}
          onChange={(e) => props.updateAccountDraft({name: e.target.value})}
        />
      </p>
      <p>
        description
        <textarea
          value={props.accountDraft.description}
          onChange={(e) => props.updateAccountDraft({description: e.target.value})}
        />
      </p>
      <p>
        account type
        <input
          type="text"
          value={props.accountDraft.accountType}
          onChange={(e) => props.updateAccountDraft({accountType: e.target.value})}
        />
      </p>
      <p>
        manage balance
        <input
          type="checkbox"
          checked={props.accountDraft.hasBalance}
          onChange={(e) => props.updateAccountDraft({hasBalance: e.target.checked})}
        />
      </p>
      <p>
        balance
        <input
          type="number"
          value={props.accountDraft.balance}
          step="1"
          onChange={(e) => props.updateAccountDraft({balance: parseInt(e.target.value, 10)})}
        />
      </p>
      <p>
        <button type="submit">Create New Account</button>
      </p>
    </form>
  </div>
);
