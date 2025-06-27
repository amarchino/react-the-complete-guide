import type { FC, ReactNode } from 'react';
import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

const Modal: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  function onClose() {
    navigate('..');
  }
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
