const PackItems = ({ item, onDeleteItem, onPackedItem }) => {
  return (
    <li className="flex flex-row gap-x-2 px-4 md:px-0">
      <input
        type="checkbox"
        className="accent-[#e5771f]"
        onChange={() => onPackedItem(item.id)}
        value={item.packed}
      />
      <span
        className={`flex flex-row gap-x-2 whitespace-nowrap ${
          item.packed ? "line-through decoration-red-600 decoration-2" : ""
        }`}
      >
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default PackItems;
