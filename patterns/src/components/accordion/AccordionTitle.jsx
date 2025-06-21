import { useAccordionContext } from './Accordion'

export default function AccordionTitle({ id, children, className = 'accordion-item-title' }) {
  const { toggleItem } = useAccordionContext();
  return <h3 className={className} onClick={() => toggleItem(id)}>{ children }</h3>
}
