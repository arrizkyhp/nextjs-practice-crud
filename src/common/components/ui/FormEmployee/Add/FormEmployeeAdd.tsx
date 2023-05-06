import { FormEvent, useReducer } from 'react';
import { BiPlus } from 'react-icons/bi';

import { Button } from '~/base/Button';
import { Input } from '~/base/Input';
import { formReducer } from '~/ui/FormEmployee/FormEmployee.reducer';

const initialStateFormData = {
  firstName: '',
  lastName: '',
};

const FormEmployeeAdd = () => {
  const [, setFormData] = useReducer(formReducer, initialStateFormData);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (Object.keys(formData).length === 0) {
    //   return console.log('formData is empty');
    // }
    // console.log(formData);
  };

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <Input
          type="number"
          name="salary"
          placeholder="Salary"
          onChange={setFormData}
          prependObject="Rp"
        />
      </div>
      <div className="input-type">
        <Input
          type="date"
          name="date"
          placeholder="Date"
          onChange={setFormData}
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="flex">
          <Input
            type="radio"
            name="status"
            id="radioDefault1"
            value="Active"
            onChange={setFormData}
            className="form-check-input apperance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
          </label>
        </div>
        <div className="flex">
          <Input
            type="radio"
            name="status"
            id="radioDefault2"
            value="Inactive"
            onChange={setFormData}
            className="form-check-input apperance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>

      <Button type="submit" color="green">
        Add{' '}
        <span>
          <BiPlus size={20} />
        </span>
      </Button>
    </form>
  );
};

export default FormEmployeeAdd;
