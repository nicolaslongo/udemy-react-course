import { forwardRef, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

// open: bool
const Modal = forwardRef(function Modal({ children, open, onClose }, ref) {
  const dialog = useRef();

  // This approach would not work, since `dialog` is undefined until the component function gets executed.
  // Therefore, we run this code as a side-effect and we use useEffect.
  // if (open) {
  //   dialog.current.showModal();
  // } else {
  //   dialog.current.close()
  // }

  useEffect(() => {
    if (open) {
        dialog.current.showModal();
      } else {
        dialog.current.close()
      }
    },
    // dependencies that would cause the component function to re-execute.
   [open],
  );

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
