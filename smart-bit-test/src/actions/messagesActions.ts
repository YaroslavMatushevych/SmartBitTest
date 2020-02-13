// modules
import { action } from 'typesafe-actions';
// consts
import { 
  MESSAGES_FETCH_DATA_SUCCESS, 
  MESSAGES_IS_LOADING, 
  MESSAGES_HAS_ERRORED} from '../consts';

export interface Messages {
  _id: string,
  date: string,
  index: string | number,
  guid: string,
  replied: boolean,
  content: string,
  name: {first: string, last: string},
  company: string,
  from: string,
  tags: string[],
}

export const messagesHasErrored = (bool: boolean) => action(MESSAGES_HAS_ERRORED, { hasErrored: bool });
export const messagesIsLoading = (bool: boolean) => action(MESSAGES_IS_LOADING, { isLoading: bool });
export const messagesFetchDataSuccess = (messages: Messages[]) => action(MESSAGES_FETCH_DATA_SUCCESS, { messages });

export const messagesFetchData = (url: RequestInfo) => {

  return (dispatch: (arg0: { type: string; isLoading?: boolean; messages?: []; hasErrored?: boolean; }) => void) => {
      dispatch(messagesIsLoading(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(messagesIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((messages) => dispatch(messagesFetchDataSuccess(messages)))
          .catch(() => dispatch(messagesHasErrored(true)));
  };
}

export default {
  messagesFetchData,
  messagesFetchDataSuccess,
  messagesIsLoading,
  messagesHasErrored,
}