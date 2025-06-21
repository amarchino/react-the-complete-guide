export default function AccordionItem({ className = 'accordion-item', children }) {
  return <li className={className}>{ children }</li>;
}
