// typings
import { projectListActions, State } from './typings';
// consts
import {
  PROJECT_LIST_FETCH_DATA_SUCCESS,
  PROJECT_LIST_IS_LOADING,
  PROJECT_LIST_HAS_ERRORED
} from '../../consts';

const initialState: State = {
  projectListItems: [{
    status: '',
    date: '',
    user: '',
    value: '',
  }],
  projectListHasErrored: false,
  projectListIsLoading: false,
};

export default (state: State = initialState, action: projectListActions): State => {
  switch (action.type) {
    case PROJECT_LIST_HAS_ERRORED:
      const hasErrored = action.payload.hasErrored;
      return {
        ...state,
        projectListHasErrored: hasErrored
      };
    case PROJECT_LIST_IS_LOADING:
      const isLoading = action.payload.isLoading;
      return {
        ...state,
        projectListIsLoading: isLoading
      };
    case PROJECT_LIST_FETCH_DATA_SUCCESS:
      const projectList = action.payload.projectList;
      return {
        ...state,
        projectListItems: projectList
      };

    default:
      return state;
  }
}