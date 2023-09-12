import { styled } from 'stitches';

const ButtonStitches = styled('button', {
  border: 'none',
  cursor: 'pointer',
  borderRadius: '$small',
  padding: '$medium $large',
  lineHeight: '$medium',
  letterSpacing: '$small',
  transition: 'all 0.2s',
  '&:active': {
    transform: 'translateY(1px)',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$onPrimary',
        '&:hover': {
          backgroundColor: '$primaryHighlighted',
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$onSecondary',
        '&:hover': {
          backgroundColor: '$secondaryHighlighted',
        },
      },
    },
  },
});

export type ButtonStitchesProps = React.ComponentProps<typeof ButtonStitches>;

export { ButtonStitches };
