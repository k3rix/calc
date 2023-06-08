import { memo, SVGProps } from 'react';

const CaseIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 566 569' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 28C0 12.536 12.536 0 28 0H538C553.464 0 566 12.536 566 28V541C566 556.464 553.464 569 538 569H28C12.536 569 0 556.464 0 541V28Z'
      fill='#2A2E30'
    />
    <path
      d='M0 28C0 12.536 12.536 0 28 0H538C553.464 0 566 12.536 566 28V541C566 556.464 553.464 569 538 569H28C12.536 569 0 556.464 0 541V28Z'
      fill='url(#paint0_angular_150_809)'
      fillOpacity={0.1}
    />
    <defs>
      <radialGradient
        id='paint0_angular_150_809'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(283 284.5) rotate(90) scale(284.5 283)'
      >
        <stop stopColor='#BBBBBB' />
        <stop offset={0.254144} stopColor='white' />
        <stop offset={1} stopColor='#5C5C5C' />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(CaseIcon2);
export { Memo as CaseIcon2 };
