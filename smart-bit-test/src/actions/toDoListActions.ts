// modules
import { action } from 'typesafe-actions';
// consts
import { 
  TO_DO_LIST_FETCH_DATA_SUCCESS, 
  TO_DO_LIST_IS_LOADING, 
  TO_DO_LIST_HAS_ERRORED, 
  TO_DO_LIST_CHECK} from '../consts';

export interface ToDoList {
  status: string,
  date: string,
  task: string,
}

export const toDoListCheckUnCheck = (checked: string, index: string | number) => action(TO_DO_LIST_CHECK, { checked, index });
export const toDoListHasErrored = (bool: boolean) => action(TO_DO_LIST_HAS_ERRORED, { hasErrored: bool });
export const toDoListIsLoading = (bool: boolean) => action(TO_DO_LIST_IS_LOADING, { isLoading: bool });
export const toDoListFetchDataSuccess = (toDoList: ToDoList[]) => action(TO_DO_LIST_FETCH_DATA_SUCCESS, { toDoList });

export const toDoListFetchData = (url: RequestInfo) => {

  return (dispatch: (arg0: { type: string; isLoading?: boolean; toDoList?: []; hasErrored?: boolean; }) => void) => {
      dispatch(toDoListIsLoading(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(toDoListIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((toDoList) => dispatch(toDoListFetchDataSuccess(toDoList)))
          .catch(() => dispatch(toDoListHasErrored(true)));
  };
}

export default {
  toDoListFetchData,
  toDoListFetchDataSuccess,
  toDoListIsLoading,
  toDoListHasErrored,
  toDoListCheckUnCheck,
}