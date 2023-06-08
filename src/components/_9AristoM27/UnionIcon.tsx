import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 135' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.9}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 0H35V8H0V0ZM4 119.239H31V124.97H4V119.239ZM31 97.7463H20.3421V87H14.6579V97.7463H4V103.478H14.6579V114.224H20.3421V103.478H31V97.7463ZM31 129.269H4V135H31V129.269Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
