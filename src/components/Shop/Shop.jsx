import { inventoryData } from "../../data/data";

const Shop = () => {
  return (
    <main>
      <h1 className="text-4xl font-semibold my-8">Shop</h1>
      <ul>
        {inventoryData.map((item) => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Shop;
