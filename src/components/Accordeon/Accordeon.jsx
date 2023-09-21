import { useState } from "react";
import AccordeonTitle from "./AccordeonTitle/AccordeonTitle";
import AccordeonCard from "./AccordeonCard/AccordeonCard";

export const Accordeon = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  }
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <AccordeonTitle
            item={item}
            index={index}
            activeIndex={activeIndex}
            onClick={handleClick}
          />
        <AccordeonCard item={item} index={index} activeIndex={activeIndex} />
        </div>
      ))}
    </div>
  )
}