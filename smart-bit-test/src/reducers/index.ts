// modules
import { Reducer, combineReducers } from 'redux';
// typings
import { AppState } from './typings';
import { messages, messagesHasErrored, messagesIsLoading } from './getMessages';
import { projectList, projectListHasErrored, projectListIsLoading } from './getProjectList';

// application reducer
export const appReducer = combineReducers({
  messages,
  messagesHasErrored,
  messagesIsLoading,
  projectList, 
  projectListHasErrored,
  projectListIsLoading,
});

// high-level reducer
const rootReducer: Reducer = (state: AppState, action :any) => {
  return appReducer(state, action);
};

export default rootReducer;

