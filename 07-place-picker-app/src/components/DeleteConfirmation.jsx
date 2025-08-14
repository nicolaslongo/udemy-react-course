import { useEffect } from "react";

import ProgressBar from "./ProgressBar.jsx";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const confirmationTimer = 3000;

  useEffect(() => {
    console.log('Timer set!'); 
    // This code is also a side-effect, it's not directly related to outputting the jsx code inside the return.
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    // Cleanup function: it will run right before useEffect re-execution OR right before the component DeleteConfirmation dismounts
    // i.e. gets removed from the DOM.
    return () => {
      clearTimeout(timer);
      console.log('Timer cleaned up');
    }
  }, 
  // if you use a function as a dependency, every time the function is re-defined (between renders), it's memory address changes and 
  // this dependency would make the useEffect re-run.
  // This is why we don't use simple functions (or complete objects) as dependencies. Instead we wrap those functions around the
  // useCallback hook. And then they're ready to go
  [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={confirmationTimer}/>
    </div>
  );
}
