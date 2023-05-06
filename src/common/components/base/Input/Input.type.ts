import { Dispatch, ReactNode } from 'react';

import { FormEmployeeReducerEvent } from '~/ui/FormEmployee/FormEmployee.type';

export type InputProps = {
  type: string;
  name?: string;
  placeholder?: string;
  id?: string;
  value?: string;
  className?: string;
  prependObject?: ReactNode;
  onChange?: Dispatch<FormEmployeeReducerEvent>;
};
