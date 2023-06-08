import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './_9AristoM27.module.css';
import { ButtonAristo } from './ButtonAristo/ButtonAristo';
import { ButtonIcon } from './ButtonIcon.js';
import { CaseIcon2 } from './CaseIcon2.js';
import { CaseIcon3 } from './CaseIcon3.js';
import { CaseIcon4 } from './CaseIcon4.js';
import { CaseIcon } from './CaseIcon.js';
import { DisplayIcon2 } from './DisplayIcon2.js';
import { DisplayIcon3 } from './DisplayIcon3.js';
import { DisplayIcon } from './DisplayIcon.js';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  hide?: {
    c?: boolean;
    unnamed?: boolean;
  };
}
/* @figmaId 24:111 */
export const _9AristoM27: FC<Props> = memo(function _9AristoM27(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.case}>
        <CaseIcon className={classes.icon} />
      </div>
      <div className={classes.case2}>
        <CaseIcon2 className={classes.icon2} />
      </div>
      <div className={classes.case3}>
        <CaseIcon3 className={classes.icon3} />
      </div>
      <div className={classes.case4}>
        <CaseIcon4 className={classes.icon4} />
      </div>
      <button className={classes.button}>
        <div className={classes.shadow13}></div>
        <div className={classes.inset13}></div>
        <div className={classes.rectangle13}></div>
      </button>
      <div className={classes.button2}>
        <ButtonIcon className={classes.icon5} />
      </div>
      <ButtonAristo
        className={classes.buttonAristo}
        classes={{ shadow: classes.shadow, inset: classes.inset, rectangle: classes.rectangle }}
        text={{
          _9: <div className={classes.unnamed}>0</div>,
        }}
      />
      <ButtonAristo
        className={classes.buttonAristo2}
        classes={{ shadow: classes.shadow2, inset: classes.inset2, rectangle: classes.rectangle2 }}
        text={{
          _9: <div className={classes._1}>1</div>,
        }}
      />
      <ButtonAristo
        className={classes.buttonAristo3}
        classes={{ shadow: classes.shadow3, inset: classes.inset3, rectangle: classes.rectangle3 }}
        text={{
          _9: <div className={classes._2}>2</div>,
        }}
      />
      <ButtonAristo
        className={classes.buttonAristo4}
        classes={{ shadow: classes.shadow4, inset: classes.inset4, rectangle: classes.rectangle4 }}
        text={{
          _9: <div className={classes._3}>3</div>,
        }}
      />
      <ButtonAristo
        className={classes.buttonAristo5}
        classes={{ shadow: classes.shadow5, inset: classes.inset5, rectangle: classes.rectangle5 }}
        text={{
          _9: <div className={classes._7}>7</div>,
        }}
      />
      <ButtonAristo
        className={classes.buttonAristo6}
        classes={{ shadow: classes.shadow6, inset: classes.inset6, rectangle: classes.rectangle6 }}
        text={{
          _9: <div className={classes._8}>8</div>,
        }}
      />
      <ButtonAristo
        className={classes.buttonAristo7}
        classes={{ shadow: classes.shadow7, inset: classes.inset7, rectangle: classes.rectangle7 }}
        text={{
          _9: <div className={classes._9}>9</div>,
        }}
      />
      <ButtonAristo
        className={classes.buttonAristo8}
        classes={{ shadow: classes.shadow8, inset: classes.inset8, rectangle: classes.rectangle8 }}
        text={{
          _9: <div className={classes.c}>C</div>,
        }}
      />
      <ButtonAristo
        className={classes.buttonAristo9}
        classes={{ shadow: classes.shadow9, inset: classes.inset9, rectangle: classes.rectangle9 }}
        hide={{
          _9: true,
        }}
      />
      <ButtonAristo
        className={classes.buttonAristo10}
        classes={{ shadow: classes.shadow10, inset: classes.inset10, rectangle: classes.rectangle10 }}
        hide={{
          _9: true,
        }}
      />
      <ButtonAristo
        className={classes.buttonAristo11}
        classes={{ shadow: classes.shadow11, inset: classes.inset11, rectangle: classes.rectangle11 }}
        text={{
          _9: <div className={classes.unnamed2}>÷</div>,
        }}
      />
      <ButtonAristo
        className={classes.buttonAristo12}
        classes={{ shadow: classes.shadow12, inset: classes.inset12, rectangle: classes.rectangle12 }}
        text={{
          _9: <div className={classes.unnamed3}>•</div>,
        }}
      />
      <div className={classes.union}>
        <UnionIcon className={classes.icon6} />
      </div>
      <div className={classes.display}>
        <DisplayIcon className={classes.icon7} />
      </div>
      <div className={classes.display2}>
        <DisplayIcon2 className={classes.icon8} />
      </div>
      <div className={classes.display3}>
        <DisplayIcon3 className={classes.icon9} />
      </div>
      <div className={classes._12345678}>1.2345678</div>
      <div className={classes._123456782}>1.2345678</div>
    </div>
  );
});
