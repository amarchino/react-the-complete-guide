import Accordion from './components/accordion/Accordion';

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item title="We got 20 years of experience" className="accordion-item" id="experience">
            <article>
              <p>You can&apos; go wrong with us.</p>
              <p>We are in the business of planning highly individualized vacation trips for more than 20 years.</p>
            </article>
          </Accordion.Item>
          <Accordion.Item title="We're working with local guides" className="accordion-item" id="local-guides">
            <article>
              <p>We are not doing this along from our office</p>
              <p>Instead, we are working with local guides to ensure a safe and pleasant vacation.</p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
