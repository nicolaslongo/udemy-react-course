import UserInputSlot from "./UserInputSlot.jsx"

export default function UserInputGroup({inputValues, onSetInputValues}) {
  console.log('inputValues are', inputValues)
  return <section id="user-input">
    <div div className="input-group">
      <UserInputSlot 
        id="initialInvestment" 
        label="Initial Investment" 
        value={inputValues.initialInvestment}
        onValueChange={(event) => onSetInputValues('initialInvestment', event.target.value)}
      />
      <UserInputSlot 
        id="annualInvestment" 
        label="Annual Investment" 
        value={inputValues.annualInvestment}
        onValueChange={(event) => onSetInputValues('annualInvestment', event.target.value)}
      />
    </div>
    <div div className="input-group">
      <UserInputSlot 
        id="expectedReturn" 
        label="Expected return" 
        value={inputValues.expectedReturn}
        onValueChange={(event) => onSetInputValues('expectedReturn', event.target.value)}
      />
      <UserInputSlot 
        id="duration" 
        label="Duration" 
        value={inputValues.duration}
        onValueChange={(event) => onSetInputValues('duration', event.target.value)}
      />
    </div>
  </section>
}