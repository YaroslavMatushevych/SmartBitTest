// typings
import { ToDoActions, State } from './typings';
// consts
import {
  TO_DO_LIST_FETCH_DATA_SUCCESS,
  TO_DO_LIST_IS_LOADING,
  TO_DO_LIST_HAS_ERRORED,
  TO_DO_LIST_CHECK
} from '../../consts';

const initialState: State = {
  toDoListItems: [{
    status: '',
    date: '',
    task: '',
  }],
  toDoListHasErrored: false,
  toDoListIsLoading: false,
};

export default (state: State = initialState, action: ToDoActions): State => {
  switch (action.type) {
    case TO_DO_LIST_CHECK:
      return {
        ...state,
        toDoListItems: state.toDoListItems.map((todo: any, index: number | string) => index == action.payload.index ?
          { ...todo, status: action.payload.checked } :
          todo
        )
      };
    case TO_DO_LIST_HAS_ERRORED: {
      const { hasErrored } = action.payload;
      return {
        ...state,
        toDoListHasErrored: hasErrored,
      }
    };
    case TO_DO_LIST_IS_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        toDoListIsLoading: isLoading,
      }
    };
    case TO_DO_LIST_FETCH_DATA_SUCCESS: {
      const { toDoList } = action.payload;
      return {
        ...state,
        toDoListItems: toDoList,
      }
    };
    default:
      return state;
  }
}