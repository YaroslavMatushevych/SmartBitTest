// modules
import { Reducer, combineReducers } from 'redux';
// typings
import { AppState } from './typings';
import messages from './getMessages';
import projectList from './getProjectList';
import toDoList from './getToDoList';
import transactions from './getTransactionList';


// application reducer
export const appReducer = combineReducers({
  messages,
  projectList,
  toDoList,
  transactions,
});

// high-level reducer
const rootReducer: Reducer = (state: AppState, action :any) => {
  return appReducer(state, action);
};

export default rootReducer;

