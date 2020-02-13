import * as transactionActions from '../../actions/transactionsActions';
import { ActionType } from 'typesafe-actions';

export type State = {
  transactionList: {
    txid: string,
    txnum: number,
    transaction: string,
    date: string,
    latitude: string,
    longitude: string,
    amount: string,
  }[],
  transactionHasErrored: boolean,
  transactionIsLoading: boolean,
};

export type transactionActions = ActionType<typeof transactionActions>;