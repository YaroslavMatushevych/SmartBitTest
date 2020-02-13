// typings
import { transactionActions, State } from './typings';
// consts
import {
  TRANSACTION_LIST_FETCH_DATA_SUCCESS,
  TRANSACTION_LIST_IS_LOADING,
  TRANSACTION_LIST_HAS_ERRORED,
} from '../../consts';

const initialState: State = {
  transactionList: [{
    txid: '',
    txnum: 0,
    transaction: '',
    date: '',
    latitude: '',
    longitude: '',
    amount: '',
  }],
  transactionHasErrored: false,
  transactionIsLoading: false,
};

export default (state: State = initialState, action: transactionActions): State => {
  switch (action.type) {
    case TRANSACTION_LIST_HAS_ERRORED: {
      const { hasErrored } = action.payload;
      return {
        ...state,
        transactionHasErrored: hasErrored,
      }
    };
    case TRANSACTION_LIST_IS_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        transactionIsLoading: isLoading,
      }
    };
    case TRANSACTION_LIST_FETCH_DATA_SUCCESS: {
      const { transactionsList } = action.payload;
      return {
        ...state,
        transactionList: transactionsList,
      }
    };
    default:
      return state;
  }
}