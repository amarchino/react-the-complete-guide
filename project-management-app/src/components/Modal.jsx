import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

export default function Modal({ ref, children, buttonCaption = "Close" }) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    }
  }));

  return createPortal(<dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounder-md shadow-md">
    { children }
    <form method="dialog" className="mt-4 text-right">
      <Button>{ buttonCaption }</Button>
    </form>
  </dialog>, document.getElementById('modal-root'));
}
