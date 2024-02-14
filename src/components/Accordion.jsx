import { data } from "../data";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (i) => {
    if (clicked === i) {
      return setClicked("0");
    }
    setClicked(i);
  };

  return (
    <ul className="accordion">
      {data.map((datos, i) => (
        <AccordionItem
          key={i}
          datos={datos}
          onToggle={() => handleToggle(i)}
          active={clicked === i}
        />
      ))}
    </ul>
  );
};

export default Accordion;
