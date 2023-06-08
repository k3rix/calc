import { memo, SVGProps } from 'react';

const CaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 600 600' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 32C0 14.3269 14.3269 0 32 0H568C585.673 0 600 14.3269 600 32V568C600 585.673 585.673 600 568 600H32C14.3269 600 0 585.673 0 568V32Z'
      fill='#D2D0CC'
      stroke='#333333'
      strokeWidth={8}
    />
  </svg>
);
const Memo = memo(CaseIcon);
export { Memo as CaseIcon };
