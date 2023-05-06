import { InputProps } from '~/base/Input/Input.type';

const Input = (props: InputProps) => {
  const { prependObject } = props;

  return (
    <div className="relative">
      {prependObject && (
        <div className="absolute inset-y-0 left-2 flex items-center pl-2 pointer-events-none text-gray-400">
          Rp
        </div>
      )}

      <input
        className={`border w-full px-5 py-3 focus:outline-none rounded-md ${
          prependObject && 'pl-11'
        }`}
        {...props}
      />
    </div>
  );
};

export default Input;
