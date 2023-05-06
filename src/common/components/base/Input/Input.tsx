import { InputProps } from '~/base/Input/Input.type';

const Input = (props: InputProps) => {
  return (
    <input
      className="border w-full px-5 py-3 focus:outline-none rounded-md"
      {...props}
    />
  );
};

export default Input;
