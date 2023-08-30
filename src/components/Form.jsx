import { useState } from "react";

const Form = () => {
  const [itemDescription, setItemDescription] = useState("");
  const [itemNum, setItemNum] = useState(1);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!itemDescription) return;
    const newItem = {
      id: Date.now(),
      description: itemDescription,
      quantity: itemNum,
      packed: false,
    };
    console.log(newItem);
    setItemDescription("");
    setItemNum(1);
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="grid text-center md:flex md:flex-row justify-center items-center py-5 bg-[#e5771f]"
      >
        <p className="font-semibold text-amber-950 md:mr-4 ">
          What do you need for your 😍 trip?
        </p>
        <div className="flex flex-row gap-1 mt-4 md:mt-0">
          <select
            value={itemNum}
            onChange={(e) => setItemNum(+e.target.value)}
            data-te-select-init
            className="pointer bg-[#ffebb3] text-amber-950 w-16 rounded-full py-1 text-center text-sm font-semibold"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option
                key={num}
                value={num}
                className="bg-[#5a3e2b] text-[#ffebb3]"
              >
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="item..."
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            className="pointer bg-[#ffebb3] w-44 rounded-full py-1 px-6 font-semibold text-amber-950 text-sm "
          />
          <button className="bg-[#76c7ad] uppercase pointer w-16 rounded-full py-1 text-sm font-semibold text-amber-950">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
