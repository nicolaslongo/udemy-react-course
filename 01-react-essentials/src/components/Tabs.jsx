// This slot pattern is very very used. We could have added another slot to add into another 
// part of the JSX pattern, injecting more JSX code into Tabs component.
// ButtonsContainer is a component identifier passed as a value por a prop, to dynamically
// render different htmls
export default function Tabs({ children, buttons, ButtonsContainer="menu" }) {
  return <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
}