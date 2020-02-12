import { messagesHasErrored, messagesIsLoading, messagesFetchDataSuccess } from '../../actions/messagesActions';
import { ActionType } from 'typesafe-actions';

export type State = [{
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
}];

export type messagesHasErroredAction = ActionType<typeof messagesHasErrored>;
export type messagesIsLoadingAction = ActionType<typeof messagesIsLoading>;
export type messagesFetchDataSuccessAction = ActionType<typeof messagesFetchDataSuccess>;