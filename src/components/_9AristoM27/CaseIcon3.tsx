import { memo, SVGProps } from 'react';

const CaseIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 556 556' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 24C0 10.7452 10.7452 0 24 0H532C545.255 0 556 10.7452 556 24V532C556 545.255 545.255 556 532 556H24C10.7452 556 0 545.255 0 532V24Z'
      fill='#454C50'
    />
  </svg>
);
const Memo = memo(CaseIcon3);
export { Memo as CaseIcon3 };
