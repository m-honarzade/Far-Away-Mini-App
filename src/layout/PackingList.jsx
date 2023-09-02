import { useState } from "react";
import PackItems from "../components/PackItems";

const PackingList = ({ items, onDeleteItem, onPackedItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "status")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="relative text-[#ffebb3] flex flex-col justify-start h-8 items-center">
      <ul className=" py-8 grid grid-cols-3 gap-x-8 gap-y-4 md:gap-x-32 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {sortedItems.map((item) => (
          <PackItems
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onPackedItem={onPackedItem}
          />
        ))}
      </ul>
      <div className=" absolute top-60 md:top-80 mt-auto flex flex-row gap-x-2">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="uppercase text-xs   pointer bg-[#ffebb3] text-amber-950 w-40 rounded-full py-1 text-center  font-semibold"
        >
          <option value="input" className="bg-[#5a3e2b] text-[#ffebb3]">
            sort by input
          </option>
          <option value="description" className="bg-[#5a3e2b] text-[#ffebb3]">
            sort by description
          </option>
          <option value="status" className="bg-[#5a3e2b] text-[#ffebb3]">
            sort by status
          </option>
        </select>
        <button
          onClick={onClearList}
          className="uppercase text-xs pointer bg-[#ffebb3] text-amber-950 w-36 px-1 rounded-full py-1 text-center font-semibold "
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default PackingList;
