import { useRef, useState } from 'react'

export default function SearchableList({ items, itemKeyFn = item => item, children }) {
  const [ searchTerm, setSearchTerm ] = useState('');
  const lastChange = useRef();

  const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm));

  function handleChange(event) {
    if(lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      setSearchTerm(event.target.value.toLowerCase());
    }, 500)
  }

  return <div className='searchable-list'>
    <input type="search" placeholder='Search' onChange={handleChange} />
    <ul>
      { searchResults.map(item => <li key={ itemKeyFn(item) }>{ children(item) }</li>) }
    </ul>
  </div>
}
