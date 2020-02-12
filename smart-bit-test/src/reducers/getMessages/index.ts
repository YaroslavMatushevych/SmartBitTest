// typings
import { messagesHasErroredAction, messagesIsLoadingAction, messagesFetchDataSuccessAction, State } from './typings';
// consts
import { MESSAGES_FETCH_DATA_SUCCESS, MESSAGES_IS_LOADING, MESSAGES_HAS_ERRORED} from '../../consts';

const initialState: State = [
  {_id: '',
    date: '',
    index: 1,
    guid: '',
    replied: true,
    content: '',
    name: {first: '', last: ''},
    company: '',
    from: '',
    tags: ['', '', '', ''],}
];

export const messagesHasErrored = (state = false, action: messagesHasErroredAction): boolean => {
  switch (action.type) {
      case MESSAGES_HAS_ERRORED:
          return action.payload.hasErrored;

      default:
          return state;
  }
}

export const messagesIsLoading = (state = false, action: messagesIsLoadingAction): boolean => {
  switch (action.type) {
      case MESSAGES_IS_LOADING:
          return action.payload.isLoading;

      default:
          return state;
  }
}

export const messages = (state: State = initialState, action: messagesFetchDataSuccessAction) => {
  switch (action.type) {
      case MESSAGES_FETCH_DATA_SUCCESS:
          return action.payload.messages;

      default:
          return state;
  }
}
