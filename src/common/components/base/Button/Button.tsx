import clsx from 'clsx';

import { ButtonProps } from '~/base/Button/Button.type';

const Button = (props: ButtonProps) => {
  const {
    children, color, className = 'flex', type = 'button'
  } = props;

  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-2',
        color === 'indigo'
          && 'bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800',
        color === 'green'
          && 'text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500',
        color === 'yellow'
          && 'text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500',
        color === 'gray'
          && 'text-md w-2/6 bg-gray-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-gray-400 hover:text-gray-500',
        className
      )}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
