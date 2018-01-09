import * as React from 'react';
import {LifecycleWrapper} from './LifecycleWrapper';
import {Select} from './Select';
import {FormGroup} from './FormGroup';
import {FormLabel} from './FormLabel';
import {FormContent} from './FormContent';

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
        autoComplete="off"
      >
        <FormGroup>
          <FormLabel>account</FormLabel>
          <FormContent>
            <Select
              value={props.transactionDraft.accountId}
              options={props.accounts.list.map(({id, name}) => [id, name])}
              onChange={(e) => props.updateTransactionDraft({accountId: e.target.value})}
            />
          </FormContent>
        </FormGroup>
        <FormGroup>
          <FormLabel>title</FormLabel>
          <FormContent>
            <input
              type="text"
              value={props.transactionDraft.title}
              onChange={(e) => props.updateTransactionDraft({title: e.target.value})}
            />
          </FormContent>
        </FormGroup>
        <FormGroup>
          <FormLabel>description</FormLabel>
          <FormContent>
            <textarea
              value={props.transactionDraft.description}
              onChange={(e) => props.updateTransactionDraft({description: e.target.value})}
            />
          </FormContent>
        </FormGroup>
        <FormGroup>
          <FormLabel>date</FormLabel>
          <FormContent>
            <input
              type="date"
              value={props.transactionDraft.date || ''}
              onChange={(e) => props.updateTransactionDraft({date: e.target.value})}
            />
          </FormContent>
        </FormGroup>
        <FormGroup>
          <FormLabel>transaction type</FormLabel>
          <FormContent>
            <Select
              value={props.transactionDraft.transactionType}
              options={[['expense'], ['income'], ['transfer'], ['balance-adjustment']]}
              onChange={(e) => props.updateTransactionDraft({transactionType: e.target.value})}
            />
          </FormContent>
        </FormGroup>
        <FormGroup>
          <FormLabel>amount</FormLabel>
          <FormContent>
            <input
              type="number"
              value={props.transactionDraft.amount}
              step="1"
              min="-999999999"
              onChange={(e) => props.updateTransactionDraft({amount: parseInt(e.target.value, 10)})}
            />
          </FormContent>
        </FormGroup>
        <FormGroup>
          <FormLabel />
          <FormContent>
            <button type="submit">Create New Transaction</button>
          </FormContent>
        </FormGroup>
      </form>
    </div>
  </LifecycleWrapper>
);
