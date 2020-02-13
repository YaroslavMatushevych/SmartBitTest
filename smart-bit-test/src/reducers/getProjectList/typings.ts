import * as projectListActions from '../../actions/projectListActions';
import { ActionType } from 'typesafe-actions';

export type State = {
  projectListItems: {
    status: string,
    date: string,
    user: string,
    value: string,
  }[],
  projectListHasErrored: boolean,
  projectListIsLoading: boolean,
};

export type projectListActions = ActionType<typeof projectListActions>;