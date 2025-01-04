import { accordianData } from "../../utils/constants";
import { useState } from "react";
import HomeButton from "../HomeButton";
import AccordianItem from "./AccordianItem";
const Accordian = () => {
  const [openItemIndex, setOpenItemIndex] = useState(0); //Add Index

  const handleOpenAccordian = (index) => {
    if (openItemIndex === index) {
      //Already Open item
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  return (
    <div className="">
      <div className="flex bg-blue-950 justify-between items-baseline flex-col">
        <div className="mx-auto">
          <HomeButton />
        </div>
        <h1 className="text-yellow-200 mx-auto font-bold text-3xl mb-6">
          Accordian UI
        </h1>
      </div>
      <div className="flex flex-col gap-3 items-center my-4 ">
        {accordianData.map((each, index) => (
          <AccordianItem
            key={each.title}
            title={each.title}
            body={each.body}
            isOpen={openItemIndex === index ? true : false}
            handleOpenAccordian={() => handleOpenAccordian(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordian;
