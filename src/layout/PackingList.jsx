import PackItems from "../components/PackItems";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
const PackingList = () => {
  return (
    <div className=" text-[#ffebb3] flex justify-center h-8">
      <ul className=" py-8 grid grid-cols-3 gap-x-24 md:gap-x-32 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {initialItems.map((item) => (
          <PackItems key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
