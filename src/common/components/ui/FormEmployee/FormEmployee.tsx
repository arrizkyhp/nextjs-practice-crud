import { FormEmployeeAdd } from '~/ui/FormEmployee/Add';
import { FormEmployeePropsType } from '~/ui/FormEmployee/FormEmployee.type';
import { FormEmployeeUpdate } from '~/ui/FormEmployee/Update';

const FormEmployee = (props: FormEmployeePropsType) => {
  const { showForm, setShowForm } = props;

  if (showForm.type === 'update') { return <FormEmployeeUpdate setShowForm={setShowForm} />; }

  return <FormEmployeeAdd />;
};

export default FormEmployee;
