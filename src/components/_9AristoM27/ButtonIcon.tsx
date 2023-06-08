import { memo, SVGProps } from 'react';

const ButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 91 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.8} filter='url(#filter0_f_150_812)'>
      <rect x={49} y={6} width={36} height={27} rx={8} fill='#222222' />
    </g>
    <g opacity={0.5} filter='url(#filter1_i_150_812)'>
      <rect width={91} height={30} rx={4} fill='#E9E9E9' />
    </g>
    <g filter='url(#filter2_di_150_812)'>
      <rect x={46} width={42} height={27} rx={4} fill='#E1E1E1' />
    </g>
    <g
      style={{
        mixBlendMode: 'overlay',
      }}
      filter='url(#filter3_di_150_812)'
    >
      <path d='M52 0H59V27H52V0Z' fill='#E1E1E1' />
      <path d='M64 0H71V27H64V0Z' fill='#E1E1E1' />
      <path d='M76 0H83V27H76V0Z' fill='#E1E1E1' />
    </g>
    <defs>
      <filter
        id='filter0_f_150_812'
        x={34}
        y={-9}
        width={66}
        height={57}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={7.5} result='effect1_foregroundBlur_150_812' />
      </filter>
      <filter
        id='filter1_i_150_812'
        x={0}
        y={0}
        width={91}
        height={30}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend mode='normal' in2='shape' result='effect1_innerShadow_150_812' />
      </filter>
      <filter
        id='filter2_di_150_812'
        x={42}
        y={0}
        width={50}
        height={35}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_150_812' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_150_812' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={-4} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
        <feBlend mode='overlay' in2='shape' result='effect2_innerShadow_150_812' />
      </filter>
      <filter
        id='filter3_di_150_812'
        x={52}
        y={0}
        width={33}
        height={27}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={2} />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_150_812' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_150_812' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={2} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
        <feBlend mode='normal' in2='shape' result='effect2_innerShadow_150_812' />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(ButtonIcon);
export { Memo as ButtonIcon };
