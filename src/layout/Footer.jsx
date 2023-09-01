const Footer = ({ items }) => {
  console.log(items.length);
  if (!items.length)
    return (
      <div className="bg-[#76c7ad] flex justify-center items-center mt-auto h-16">
        <p className="font-bold text-amber-950 text-sm md:text-base px-[2.5] md:px-0 ">
          Start adding some items to your packing list 🚀.
        </p>
      </div>
    );

  const itemsNum = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedItemsPercentage = Math.round((packedItems / itemsNum) * 100);

  return (
    <div className="bg-[#76c7ad] flex justify-center items-center mt-auto h-16">
      <p className="font-bold text-amber-950 text-sm md:text-base px-[2.5] md:px-0 ">
        {packedItemsPercentage === 100
          ? `You got everything. Ready to go ✈`
          : ` 💼 you have packed ${itemsNum} items on your list, and you already packed
        ${packedItems} (${packedItemsPercentage}%).`}
      </p>
    </div>
  );
};

export default Footer;
