import { useState } from 'react';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Example from './components/Example';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
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
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          { !selectedTopic ? <p>Please select a topic</p> : <Example { ...EXAMPLES[selectedTopic] } /> }
        </section>
      </main>
    </div>
  );
}

export default App;
