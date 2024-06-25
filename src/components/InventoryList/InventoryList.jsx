const InventoryList = (props) => {
  return (
    <div className="min-w-[450px]">
      <h2 className="my-4 p-4 text-center text-3xl">{props.title}</h2>
      <ul>
        {props.inventory.map((item) => (
          <li className="p-4" key={item._id}>
            <h3 className="text-xl">{item.name}</h3>
            <p>Price: {item.price}</p>
            {props.handleAddItem ? (
              <button
                onClick={() => props.handleAddItem(item)}
                className="my-2 rounded bg-slate-800 px-4 py-2 text-white"
              >
                Add Item
              </button>
            ) : (
              <button
                onClick={() => props.handleRemoveItem(item)}
                className="my-2 rounded bg-slate-800 px-4 py-2 text-white"
              >
                Remove Item
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
