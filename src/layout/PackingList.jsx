import PackItems from "../components/PackItems";

const PackingList = ({ items, onDeleteItem }) => {
  return (
    <div className=" text-[#ffebb3] flex justify-center h-8">
      <ul className=" py-8 grid grid-cols-3 gap-x-8 gap-y-4 md:gap-x-32 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {items.map((item) => (
          <PackItems key={item.id} item={item} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
