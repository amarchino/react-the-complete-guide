import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  const variant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog open className="modal" variants={variant} initial="hidden" animate="visible" exit="hidden" >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
