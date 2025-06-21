import { createContext, useContext, useState } from 'react';

const AccordionContext = createContext({
  openItemId: 1,
  openItem: (id) => {},
  closeItem: () => {},
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
  function openItem(id) {
    setOpenItemId(id)
  }
  function closeItem() {
    setOpenItemId(null)
  }
  const contextValue = {
    openItemId,
    openItem,
    closeItem
  };

  return (
    <AccordionContext value={contextValue}>
      <ul className={className}>
        { children }
      </ul>
    </AccordionContext>
  );
}
