import { Dispatch, SetStateAction } from 'react';

import { ShowFormType } from 'src/common/types/ShowFormType';

export type TableProps = {
  setShowForm: Dispatch<SetStateAction<ShowFormType>>;
};
