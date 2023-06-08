import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { _9AristoM27 } from './components/_9AristoM27/_9AristoM27';
import resets from './components/_resets.module.css';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <_9AristoM27 />
    </div>
  );
});
