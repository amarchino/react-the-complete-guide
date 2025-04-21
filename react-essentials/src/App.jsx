import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS } from './data';

function App() {
  function handleClick() {
    console.log('Hello world!');
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept { ...CORE_CONCEPTS[0] } />
            <CoreConcept { ...CORE_CONCEPTS[1] } />
            <CoreConcept { ...CORE_CONCEPTS[2] } />
            <CoreConcept { ...CORE_CONCEPTS[3] } />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={handleClick}>Components</TabButton>
            <TabButton onClick={handleClick}>JSX</TabButton>
            <TabButton onClick={handleClick}>Props</TabButton>
            <TabButton onClick={handleClick}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
