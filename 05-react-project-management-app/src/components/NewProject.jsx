import { useRef } from 'react';
import Input from "./Input.jsx"
import Modal from './Modal.jsx';

// TODO: move to utils
function isValidString(input) {
  return input.trim() !== ""
}

export default function NewProject({handleSaveProject, handleCancelProject}) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (!isValidString(enteredTitle) || !isValidString(enteredDescription) || !isValidString(enteredDueDate)) {
      modal.current.open()
      return;
    }

    const newProject = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    handleSaveProject(newProject);
  }

  return <>
    <Modal ref={modal} buttonLabel="Ok">
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
      <p className="text-stone-600 mb-4">Please make sure to provide a valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={handleCancelProject}>Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
        </li>
      </menu>

      <div>
        <Input type="text" ref={title} label="Title"></Input>
        <Input ref={description} label="Description" textArea></Input>
        <Input type="date" ref={dueDate} label="DueDate"></Input>
      </div>
    </div>
  </>
};