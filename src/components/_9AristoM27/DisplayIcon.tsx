import { memo, SVGProps } from 'react';

const DisplayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 513 70' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M506.577 0H6.42322C2.87577 0 2.61251e-06 2.87577 2.47362e-06 6.42321L0 63.1818C0 66.7273 2.87273 69.6022 6.41821 69.605L506.572 69.995C510.121 69.9978 513 67.1212 513 63.5718V6.42321C513 2.87577 510.124 0 506.577 0Z'
      fill='#200603'
    />
  </svg>
);
const Memo = memo(DisplayIcon);
export { Memo as DisplayIcon };
