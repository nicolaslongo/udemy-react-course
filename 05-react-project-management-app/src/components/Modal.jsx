import { useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button.jsx';


// usingRefs!
export default function Modal({ref, children, buttonLabel}) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return createPortal(<dialog ref={dialog} className="backdrop:bg-stone-900/70 p-4 rounded-md shadow-md">
    {children}
    <form method="dialog" className="mt-4 text-right">
      <Button>{buttonLabel}</Button>
    </form> 
  </dialog>, document.getElementById('modal-root')
  );
}