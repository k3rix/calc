import { memo, SVGProps } from 'react';

const DisplayIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 476 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M466.365 0H9.63482C4.31366 0 0 4.31365 0 9.63482V42.3652C0 47.6863 4.31368 52 9.63484 52H466.365C471.686 52 476 47.6863 476 42.3652V9.63482C476 4.31366 471.686 0 466.365 0Z'
      fill='#300E0E'
    />
  </svg>
);
const Memo = memo(DisplayIcon2);
export { Memo as DisplayIcon2 };
