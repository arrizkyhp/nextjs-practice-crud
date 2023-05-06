import { Dispatch, SetStateAction } from 'react';

import { ShowFormType } from 'src/common/types/ShowFormType';

export type FormEmployeePropsType = {
  showForm: ShowFormType;
  setShowForm: Dispatch<SetStateAction<ShowFormType>>;
};

export type FormEmployeeReducerEvent = {
  type: string;
  target: {
    name: string;
    value: string;
  };
};

export type FormEmployeeReducerState = {
  firstName: string;
};

export type FormEmployeeUpdatePropsType = {
  setShowForm: Dispatch<SetStateAction<ShowFormType>>;
};
