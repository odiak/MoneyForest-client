import * as React from 'react';
import {LifecycleWrapper} from './LifecycleWrapper';
import {Select} from './Select';

export const NewTransaction = (props) => (
  <LifecycleWrapper
    componentDidMount={() => {
      setImmediate(() => {
        props.resetTransactionDraft();
        props.loadAccountsIfNotYet(props.accounts);
      });
    }}
    componentDidUpdate={() => {
      if (!props.transactionDraft.accountId && props.accounts.list.size > 0) {
        setImmediate(() => {
          console.log(props.accounts.list.first().id);
          props.updateTransactionDraft({accountId: props.accounts.list.first().id});
        });
      }
    }}
  >
    <div>
      <h2>New Transaction</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.createNewTransaction(props.transactionDraft.toJS());
        }}
      >
        <p>
          account
          <Select
            value={props.transactionDraft.accountId}
            options={props.accounts.list.map(({id, name}) => [id, name])}
            onChange={(e) => props.updateTransactionDraft({accountId: e.target.value})}
          />
        </p>
        <p>
          title
          <input
            type="text"
            value={props.transactionDraft.title}
            onChange={(e) => props.updateTransactionDraft({title: e.target.value})}
          />
        </p>
        <p>
          description
          <textarea
            value={props.transactionDraft.description}
            onChange={(e) => props.updateTransactionDraft({description: e.target.value})}
          />
        </p>
        <p>
          date
          <input
            type="date"
            value={props.transactionDraft.date || ''}
            onChange={(e) => props.updateTransactionDraft({date: e.target.value})}
          />
        </p>
        <p>
          transaction type
          <Select
            value={props.transactionDraft.transactionType}
            options={[['expense'], ['income'], ['transfer'], ['balance-adjustment']]}
            onChange={(e) => props.updateTransactionDraft({transactionType: e.target.value})}
          />
        </p>
        <p>
          amount
          <input
            type="number"
            value={props.transactionDraft.amount}
            step="1"
            onChange={(e) => props.updateTransactionDraft({amount: parseInt(e.target.value, 10)})}
          />
        </p>
        <p>
          <button type="submit">Create New Transaction</button>
        </p>
      </form>
    </div>
  </LifecycleWrapper>
);
