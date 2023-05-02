// External dependencies
import { useAlert } from '@/context/AlertProvider';
import React from 'react';

// Types & Interfaces
type ButtonProps = Exclude<JSX.IntrinsicElements['button'], 'onClick'>;

function Button({ children, ...props }: React.PropsWithChildren<ButtonProps>) {
  const onClick = useAlert();

  return (
    <button {...props} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
