import "./index.css";

import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./components/Place"

import { PLACES } from "./places";

export default function App() {
  const accordion = "accordion"
  const accordionItem = "accordion-item";
  const accordionItemTitle = "accordion-item-title";
  const accordionItemContent = "accordion-item-conten";

  return <main>
    <section>
      <h2>Why work with us?</h2>
      {/* Compound component pattern */}
      <Accordion className={accordion}>
        <Accordion.Item id="experience" className={accordionItem}>
          <Accordion.Title className={accordionItemTitle}>
            We got 20 years of experience
          </Accordion.Title>
          <Accordion.Content className={accordionItemContent}>
            <article>
              <p>You can't go wrong with us.</p>
              <p>For this random reason.</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item id="guides" className={accordionItem}>
          <Accordion.Title className={accordionItemTitle}>
          We work with local guides
          </Accordion.Title>
          <Accordion.Content className={accordionItemContent}>
            <article>
              <p>The best in each place.</p>
              <p>So amazing.</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item id="languages" className={accordionItem}>
          <Accordion.Title className={accordionItemTitle}>
          We know a lot of languages
          </Accordion.Title>
          <Accordion.Content className={accordionItemContent}>
          <article>
            <p>Esto es impresionante.</p>
            <p>Superbe.</p>
          </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>

    <section>
      <SearchableList items={PLACES} itemKeyFunction={(item) => item.id}>
        {/* This is render props pattern: passing a function as a children value so that the receiving component
            may invoke it and complete its rendering*/}
        {(item) => <Place item={item}/>}
      </SearchableList>
      <SearchableList items={["item 1", "item 2", "item 3"]} itemKeyFunction={(item) => item}>
        {(item) => item}
      </SearchableList>
    </section>
  </main>;
};