const AccordianItem = ({ title, body, handleOpenAccordian, isOpen }) => {
  return (
    <div className="bg-sky-100 w-full md:w-1/2 px-4 py-4 rounded-lg shadow-md shadow-blue-400">
      <div className="flex items-center justify-between font-bold text-lg">
        <h2>{title}</h2>
        <span
          className="cursor-pointer shadow-sm bg-white rounded-sm transition-all"
          onClick={handleOpenAccordian}
        >
          {isOpen ? "🔺" : "🔻"}
        </span>
      </div>

      {isOpen && <p className="mt-4">{body}</p>}
    </div>
  );
};

export default AccordianItem;
