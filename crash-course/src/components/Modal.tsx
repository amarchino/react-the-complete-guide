import type { FC, ReactNode } from 'react';
import classes from './Modal.module.css';

const Modal: FC<{ onClose: () => void, children: ReactNode }> = ({ onClose, children }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={ onClose } />
      <dialog className={classes.modal} open>
         { children }
      </dialog>
    </>
  );
};
export default Modal;
