import { createContext, useContext, useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

const AccordionContext = createContext({
  openItemId: 1,
  toggleItem: (id) => {}
});

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if(!ctx) {
    throw new Error('Accordion-related componentes must be wrapper by <Accordion>');
  }
  return ctx;
}

export default function Accordion({ children, className }) {
  const [ openItemId, setOpenItemId ] = useState();

  function toggleItem(id) {
    setOpenItemId(prev => prev === id ? null : id)
  }
  const contextValue = {
    openItemId,
    toggleItem
  };

  return (
    <AccordionContext value={contextValue}>
      <ul className={className}>
        { children }
      </ul>
    </AccordionContext>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
