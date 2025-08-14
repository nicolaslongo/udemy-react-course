import { useState } from 'react';

import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx';

// state: variables that may change during runtime, because of user interactions
// and when they change React must re-execute a component function

export default function Examples() {
  function handleClick(selectedButton) {
      setSelectedTopic(selectedButton)
    }
  // You can only call hooks inside of Component Functions, on the top level. that's weird to me.
  const [ selectedTopic, setSelectedTopic ] = useState();

  let tabContent = <p>Please select a topic</p>
  if (selectedTopic) {
    tabContent = (
      // TODO: component me?
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>  
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>  
      </div>    
    )
  }

  const buttons = <>
    <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}> Components </TabButton>
    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}> JSX </TabButton>
    <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}> Props </TabButton>
    <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}> State </TabButton>
  </>
    
  return (
      <Section title="Examples" id="examples">
        <Tabs buttons={buttons} ButtonsContainer="menu">
          {tabContent}
        </Tabs>
    </Section>
  )
}