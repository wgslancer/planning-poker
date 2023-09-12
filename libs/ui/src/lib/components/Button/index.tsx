import { forwardRef } from 'react';
import { ButtonStitches, ButtonStitchesProps } from './Button.stitches';

export interface ButtonProps extends ButtonStitchesProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    return <ButtonStitches {...props} ref={ref} />;
  }
);
