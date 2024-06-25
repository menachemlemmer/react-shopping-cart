import { inventoryData } from "../../data/data";
import InventoryList from "../InventoryList/InventoryList";
import { useState } from "react";

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData);
  const [userInventory, setUserInventory] = useState([]);

  const handleAddItem = (item) => {
    setUserInventory([...userInventory, item]);
    setShopInventory(
      shopInventory.filter((shopItem) => shopItem._id !== item._id),
    );
  };

  const handleRemoveItem = (item) => {
    setShopInventory([...shopInventory, item]);
    setUserInventory(userInventory.filter((el) => el._id !== item._id));
  };

  return (
    <main>
      <h1 className="my-8 text-4xl font-semibold">Shop</h1>
      <section className="flex items-start justify-center gap-5">
        <InventoryList
          title="Shop Inventory"
          inventory={shopInventory}
          handleAddItem={handleAddItem}
        />
        <InventoryList
          title="User Inventory"
          inventory={userInventory}
          handleRemoveItem={handleRemoveItem}
        />
      </section>
    </main>
  );
};

export default Shop;
