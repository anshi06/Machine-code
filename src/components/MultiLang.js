import { useState } from "react";
import { languages } from "../utils/constants";
import HomeButton from "./HomeButton";

const MultiLang = () => {
  const [placeholderValue, setPlaceHolderValue] = useState("Write anything");

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    const val = languages.filter((l) => l.lang === lang);
    setPlaceHolderValue(val[0].content);
  };

  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <HomeButton />
      </div>

      <div className="flex justify-center p-2 m-2">
        <input
          type="text"
          placeholder={placeholderValue}
          className="w-1/2 bg-gray-200 p-2 m-2 rounded-md"
        />
        <select
          onChange={handleLanguageChange}
          className="bg-blue-950 text-white p-2 m-2 rounded-md"
        >
          {languages.map((lang) => (
            <option key={lang.type}>{lang.lang}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MultiLang;
