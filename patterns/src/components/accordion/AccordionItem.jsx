import { createContext, useContext } from 'react';

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if(!ctx) {
    throw new Error('AccordionItem-related components must be wrapperd by <Accordion.Item>.');
  }
  return ctx;
}

export default function AccordionItem({ id, className = 'accordion-item', children }) {
  return <AccordionItemContext value={id}>
    <li className={className}>{ children }</li>
  </AccordionItemContext>;

}
