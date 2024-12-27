const Product = ({ product }) => {
  return (
    <div className="flex justify-between mx-72 bg-gradient-to-t from-pink-100">
      <p>{product}</p>
      <button className="bg-blue-900 hover:bg-blue-950 text-white p-2 rounded">Add+</button>
    </div>
  );
};

export default Product;
