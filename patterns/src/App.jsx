import Accordion from './components/accordion/Accordion';
import AccordionContent from './components/accordion/AccordionContent';
import Place from './components/Place';
import SearchableList from './components/searchable-list/SearchableList';
import { PLACES } from './places';

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion>
          <Accordion.Item id="experience">
            <Accordion.Title>We got 20 years of experience</Accordion.Title>
            <AccordionContent>
              <article>
                <p>You can&apos; go wrong with us.</p>
                <p>We are in the business of planning highly individualized vacation trips for more than 20 years.</p>
              </article>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item id="local-guide">
            <Accordion.Title>We're working with local guides</Accordion.Title>
            <Accordion.Content>
              <article>
                <p>We are not doing this along from our office</p>
                <p>Instead, we are working with local guides to ensure a safe and pleasant vacation.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={ PLACES } itemKeyFn={item => item.id}>
          { item => <Place item={ item } /> }
        </SearchableList>
        <SearchableList items={[ "item 1", "item 2", "item 3" ]}>
          { item => item }
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
