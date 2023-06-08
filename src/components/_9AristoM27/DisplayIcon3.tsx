import { memo, SVGProps } from 'react';

const DisplayIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 513 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.2}
      d='M504.407 0H8.28851C3.75916 0 0.133127 3.75681 0.293529 8.28332L1.03769 29.2833C1.19025 33.5886 4.72465 37 9.03267 37H504.835C509.317 37 512.925 33.3181 512.834 28.837L512.406 7.837C512.317 3.48315 508.762 0 504.407 0Z'
      fill='#575757'
    />
  </svg>
);
const Memo = memo(DisplayIcon3);
export { Memo as DisplayIcon3 };
