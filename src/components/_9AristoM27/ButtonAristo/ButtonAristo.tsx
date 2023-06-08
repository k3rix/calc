import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonAristo.module.css';

interface Props {
  className?: string;
  classes?: {
    shadow?: string;
    inset?: string;
    rectangle?: string;
    root?: string;
  };
  hide?: {
    _9?: boolean;
  };
  text?: {
    _9?: ReactNode;
  };
}
/* @figmaId 24:0 */
export const ButtonAristo: FC<Props> = memo(function ButtonAristo(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={`${props.classes?.shadow || ''} ${classes.shadow}`}></div>
      <div className={`${props.classes?.inset || ''} ${classes.inset}`}></div>
      <div className={`${props.classes?.rectangle || ''} ${classes.rectangle}`}></div>
      {!props.hide?._9 && (props.text?._9 != null ? props.text?._9 : <div className={classes._9}>9</div>)}
    </button>
  );
});
