import { useAccordionContext } from './Accordion';

export default function AccordionContent({ id, children, className = 'accordion-item-content' }) {
  const { openItemId } = useAccordionContext();
  const isOpen = openItemId === id;

  return <div className={`${className ?? ''} ${isOpen ? 'open' : 'close'}`}>{ children }</div>;
}
