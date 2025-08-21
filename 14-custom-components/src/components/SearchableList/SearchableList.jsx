import { useState, useRef } from "react";

const setTimeoutThreshold = 500;

// SearchableList component contains the searchable logic, and for renderization it uses render props:
// this is receiving and using a function children as a prop
export default function SearchableList({ items, itemKeyFunction, children }) {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter(item => 
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Debounce pattern
  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current)
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, setTimeoutThreshold)
  }

  return <div className="searchable-list">
    <input type="search" placeholder="Search" onChange={handleChange} />
    <ul>
      {searchResults.map((item) => (
        <li key={itemKeyFunction(item)}>
          {children(item)}
        </li>
      ))}
    </ul>
  </div>
}