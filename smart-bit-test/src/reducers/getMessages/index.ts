// typings
import { messagesActions, State } from './typings';
// consts
import {
  MESSAGES_FETCH_DATA_SUCCESS,
  MESSAGES_IS_LOADING,
  MESSAGES_HAS_ERRORED
} from '../../consts';

const initialState: State = {
  messagesItems: [{
    _id: '',
    date: '',
    index: 1,
    guid: '',
    replied: true,
    content: '',
    name: { first: '', last: '' },
    company: '',
    from: '',
    tags: ['', '', '', ''],
  }],
  messagesHasErrored: false,
  messagesIsLoading: false,
};

export default (state: State = initialState, action: messagesActions): State => {
  switch (action.type) {
    case MESSAGES_HAS_ERRORED:
      const hasErrored = action.payload.hasErrored;
      return {
        ...state,
        messagesHasErrored: hasErrored
      };
    case MESSAGES_IS_LOADING:
      const isLoading = action.payload.isLoading;
      return {
        ...state,
        messagesIsLoading: isLoading
      };
    case MESSAGES_FETCH_DATA_SUCCESS:
      const messages = action.payload.messages;
      return {
        ...state,
        messagesItems: messages
      };
    default:
      return state;
  }
}