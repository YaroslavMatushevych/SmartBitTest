import * as messagesActions from '../../actions/messagesActions';
import { ActionType } from 'typesafe-actions';

export type State = {
  messagesItems: {
    _id: string,
    date: string,
    index: string | number,
    guid: string,
    replied: boolean,
    content: string,
    name: { first: string, last: string },
    company: string,
    from: string,
    tags: string[],
  }[],
  messagesHasErrored: boolean,
  messagesIsLoading: boolean,
};

export type messagesActions = ActionType<typeof messagesActions>;