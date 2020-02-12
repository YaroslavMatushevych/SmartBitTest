import { projectListHasErrored, projectListIsLoading, projectListFetchDataSuccess } from '../../actions/projectListActions';
import { ActionType } from 'typesafe-actions';

export type State = [{
  status: string,
  date: string,
  user: string,
  value: string,
}];

export type projectListHasErroredAction = ActionType<typeof projectListHasErrored>;
export type projectListIsLoadingAction = ActionType<typeof projectListIsLoading>;
export type projectListFetchDataSuccessAction = ActionType<typeof projectListFetchDataSuccess>;