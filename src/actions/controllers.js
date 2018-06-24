import {
  LOAD,
  RESTART,
  ROLLBACK,
  SAVE,
  TOGGLE_HARDMODE,
} from './types';


export const load = () => ({type: LOAD});

export const restart = () => ({type: RESTART});

export const rollback = () => ({type: ROLLBACK});

export const save = () => ({type: SAVE});

export const toggleHardmode = () => ({type: TOGGLE_HARDMODE});
