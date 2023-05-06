import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  color?: 'indigo' | 'green' | 'yellow' | 'gray';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};
