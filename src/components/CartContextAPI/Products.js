import Product from "./Product";

const DUMMY_ITEMS = [
  "Book",
  "Pen",
  "KinderJoy",
  "Munch",
  "Diary",
  "Bottle",
  "NotePad",
];

const Products = () => {
  return (
      <div className="font-bold flex flex-col my-4 gap-4">
        {DUMMY_ITEMS.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </div>
  );
};

export default Products;
