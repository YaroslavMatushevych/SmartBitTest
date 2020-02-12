// typings
import { projectListHasErroredAction, projectListIsLoadingAction, projectListFetchDataSuccessAction, State } from './typings';
// consts
import { PROJECT_LIST_FETCH_DATA_SUCCESS, PROJECT_LIST_IS_LOADING, PROJECT_LIST_HAS_ERRORED } from '../../consts';

const initialState: State = [
  {
    status: '',
    date: '',
    user: '',
    value: '',
  }];

export const projectListHasErrored = (state = false, action: projectListHasErroredAction): boolean => {
  switch (action.type) {
    case PROJECT_LIST_HAS_ERRORED:
      return action.payload.hasErrored;

    default:
      return state;
  }
}

export const projectListIsLoading = (state = false, action: projectListIsLoadingAction): boolean => {
  switch (action.type) {
    case PROJECT_LIST_IS_LOADING:
      return action.payload.isLoading;

    default:
      return state;
  }
}

export const projectList = (state: State = initialState, action: projectListFetchDataSuccessAction) => {
  switch (action.type) {
    case PROJECT_LIST_FETCH_DATA_SUCCESS:
      return action.payload.projectList;

    default:
      return state;
  }
}
