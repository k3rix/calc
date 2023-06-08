import { memo, SVGProps } from 'react';

const CaseIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 570 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 4C0 1.79086 1.79086 0 4 0H566C568.209 0 570 1.79086 570 4V96C570 98.2091 568.209 100 566 100H4.00001C1.79087 100 0 98.2091 0 96V4Z'
      fill='#454C50'
    />
  </svg>
);
const Memo = memo(CaseIcon4);
export { Memo as CaseIcon4 };
