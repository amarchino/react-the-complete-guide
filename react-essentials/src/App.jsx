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
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            { CORE_CONCEPTS.map(el => <CoreConcept key={el.title} { ...el } />) }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            { CORE_CONCEPTS.map(el => <TabButton key={el.title} isSelected={selectedTopic === el.title.toLowerCase()} onClick={() => handleClick(el.title.toLowerCase())}>{ el.title }</TabButton>) }
          </menu>
          { !selectedTopic ? <p>Please select a topic</p> : <Example { ...EXAMPLES[selectedTopic] } /> }
        </section>
      </main>
    </>
  );
}

export default App;
