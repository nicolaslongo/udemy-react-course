import { CORE_CONCEPTS } from '../data.js';
import Section from './Section.jsx';
import CoreConcept from './CoreConcept.jsx';

export default function CoreConcepts() {
  return (
    <Section title="Core concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept}/>
        ))}
      </ul>
    </Section>
  )
}