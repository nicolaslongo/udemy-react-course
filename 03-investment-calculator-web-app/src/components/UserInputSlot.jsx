export default function UserInputSlot({id, label, value, onValueChange}) {
  return <>
    <p>
      <label id={id}>{label}</label>
      <input id="input" type="number" required value={value} onChange={onValueChange}/>
    </p>
  </>
}