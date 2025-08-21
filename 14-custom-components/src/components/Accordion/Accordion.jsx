import { createContext, useState, useContext } from "react";
import AccordionItem from "./AccordionItem.jsx";
import AccordionTitle from "./AccordionTitle.jsx";
import AccordionContent from "./AccordionContent.jsx";

const AccordionContext = createContext();

// expose CustomHook to use in AccordionItems
export function useAccordionContext() {
  const ctx = useContext(AccordionContext)

  // You could call the CustomHook from outside the AccordionContext.Provider and then context
  // woulde be undefined
  if (!ctx) {
    throw new Error('Accordion related components must be wrapped by Accordion Component!')
  }
  return ctx;
}

export default function Accordion({children, className}) {
  const [openItemId, setOpenItemId] = useState(null)

  function toggleItem(id) {
    setOpenItemId(previousId => previousId === id ? null : id)
  }

  const contextValue = {
    openItemId: openItemId,
    toggleItem: toggleItem,
  }

  return <AccordionContext.Provider value={contextValue}>
    <ul className={className}>{children}</ul>
  </AccordionContext.Provider>
}

// This is nice just to expose Accordion! In fact we could have not even exposed AccordionXyz, and move them
// into this file, therefore only exposing Accordion
Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;