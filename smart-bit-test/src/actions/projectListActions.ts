// modules
import { action } from 'typesafe-actions';
// consts
import { 
  PROJECT_LIST_FETCH_DATA_SUCCESS, 
  PROJECT_LIST_IS_LOADING, 
  PROJECT_LIST_HAS_ERRORED} from '../consts';

export interface ProjectList {
  status: string,
  date: string,
  user: string,
  value: string,
}

export const projectListHasErrored = (bool: boolean) => action(PROJECT_LIST_HAS_ERRORED, { hasErrored: bool });
export const projectListIsLoading = (bool: boolean) => action(PROJECT_LIST_IS_LOADING, { isLoading: bool });
export const projectListFetchDataSuccess = (projectList: ProjectList[]) => action(PROJECT_LIST_FETCH_DATA_SUCCESS, { projectList });

export const projectListFetchData = (url: RequestInfo) => {

  return (dispatch: (arg0: { type: string; isLoading?: boolean; projectList?: []; hasErrored?: boolean; }) => void) => {
      dispatch(projectListIsLoading(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(projectListIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((projectList) => dispatch(projectListFetchDataSuccess(projectList)))
          .catch(() => dispatch(projectListHasErrored(true)));
  };
}

export default {
  projectListFetchData,
  projectListFetchDataSuccess,
  projectListIsLoading,
  projectListHasErrored,
}