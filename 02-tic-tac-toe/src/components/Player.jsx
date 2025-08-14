import { useState } from 'react'; 

export default function Player({defaultName, symbol, isActive, onNameChange}) {
  const [name, setName] = useState(defaultName)
  const [isEditing, setIsEditing] = useState(false);

  function handleButtonClick() {
    // setIsEditing gets the actual value "editing" of isEditing when it's being executed, not when you 
    // schedule it
    setIsEditing(editing => {return !editing})
    if (isEditing) {
      onNameChange(symbol, name);
    }
  }

  // this is called 2 way binding: on an event change feed it into the UI. 
  // That's what we are doing with the user input
  function handleChange(event) {
    setName(event.target.value)
  }

  return <li className={isActive ? 'active' : undefined}>
    <span className="player">
      {!isEditing && <span className="player-name">{name}</span>}
      {isEditing && <input type="text" required value={name} onChange={handleChange}/>}
      <span className="player-symbol">{symbol}</span>
    </span> 

    <button className="player-symbol" onClick={handleButtonClick}>
      {isEditing ? "Save" : "Edit"}
    </button> 
  </li>;
}