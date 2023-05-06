import {
  FormEmployeeReducerEvent,
  FormEmployeeReducerState,
} from '~/ui/FormEmployee/FormEmployee.type';

export const formReducer = (
  state: FormEmployeeReducerState,
  event: FormEmployeeReducerEvent
) => {
  return { ...state, [event.target.name]: event.target.value };
};
