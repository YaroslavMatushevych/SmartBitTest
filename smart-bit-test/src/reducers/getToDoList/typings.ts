import * as ToDoActions from '../../actions/toDoListActions';
import { ActionType } from 'typesafe-actions';

export type State = {
  toDoListItems:{
    status: string,
    date: string,
    task: string,
  }[],
  toDoListHasErrored: boolean,
  toDoListIsLoading: boolean,
};

export type ToDoActions = ActionType<typeof ToDoActions>;