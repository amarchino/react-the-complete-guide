import type { FC, ReactNode } from 'react';
import classes from './Modal.module.css';

const Modal: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog className={classes.modal} open>
         { children }
      </dialog>
    </>
  );
};
export default Modal;
