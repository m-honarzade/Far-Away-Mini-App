const PackItems = ({ item, onDeleteItem }) => {
  return (
    <li className="flex flex-row gap-x-2 px-4 md:px-0 ">
      <span
        className={`flex flex-row gap-x-2 whitespace-nowrap ${
          item.packed ? "line-through" : ""
        }`}
      >
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default PackItems;
