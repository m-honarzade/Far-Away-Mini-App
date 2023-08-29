const Form = () => {
  return (
    <div>
      <form className="grid text-center md:flex md:flex-row justify-center items-center py-5 bg-[#e5771f]">
        <p className="font-semibold text-amber-950 md:mr-4 ">
          What do you need for your 😍 trip?
        </p>
        <div className="flex flex-row gap-1 mt-4 md:mt-0">
          <select
            data-te-select-init
            className="pointer bg-[#ffebb3] text-amber-950 w-16 rounded-full py-1 text-center text-sm font-semibold"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <input
            type="text"
            placeholder="item..."
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
