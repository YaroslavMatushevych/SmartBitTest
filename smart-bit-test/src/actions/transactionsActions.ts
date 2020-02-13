// modules
import { action } from 'typesafe-actions';
// consts
import { 
  TRANSACTION_LIST_FETCH_DATA_SUCCESS, 
  TRANSACTION_LIST_IS_LOADING, 
  TRANSACTION_LIST_HAS_ERRORED, 
} from '../consts';

export interface transactionsList {
  txid: string,
  txnum: number,
  transaction: string,
  date: string,
  latitude: string,
  longitude: string,
  amount: string,
}

export const transactionsHasErrored = (bool: boolean) => action(TRANSACTION_LIST_HAS_ERRORED, { hasErrored: bool });
export const transactionsIsLoading = (bool: boolean) => action(TRANSACTION_LIST_IS_LOADING, { isLoading: bool });
export const transactionsFetchDataSuccess = (transactionsList: transactionsList[]) => action(TRANSACTION_LIST_FETCH_DATA_SUCCESS, { transactionsList });

export const transactionsFetchData = (url: RequestInfo) => {

  return (dispatch: (arg0: { type: string; isLoading?: boolean; transactionsList?: []; hasErrored?: boolean; }) => void) => {
      dispatch(transactionsIsLoading(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(transactionsIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((transactionsList) => dispatch(transactionsFetchDataSuccess(transactionsList)))
          .catch(() => dispatch(transactionsHasErrored(true)));
  };
}

export default {
  transactionsFetchData,
  transactionsFetchDataSuccess,
  transactionsIsLoading,
  transactionsHasErrored,
}