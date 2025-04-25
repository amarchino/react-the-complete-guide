import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from '../data';
import Example from './Example';
import TabButton from './TabButton';
import Section from './Section';

export default function Examples() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section id="examples" title="Examples">
      <menu>
        { CORE_CONCEPTS.map(el => <TabButton key={el.title} isSelected={selectedTopic === el.title.toLowerCase()} onClick={() => handleClick(el.title.toLowerCase())}>{ el.title }</TabButton>) }
      </menu>
      { !selectedTopic ? <p>Please select a topic</p> : <Example { ...EXAMPLES[selectedTopic] } /> }
    </Section>
  );
}
