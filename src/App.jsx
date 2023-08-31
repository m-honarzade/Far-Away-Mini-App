import { useState } from "react";
import Form from "./components/Form";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PackingList from "./layout/PackingList";

// const Items = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Chargers", quantity: 1, packed: true },
//   { id: 4, description: "Book", quantity: 2, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems((items) => [...items, item]);
  };

  const deleteItemHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const packedItemHandler = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className=" bg-[#5a3e2b] flex flex-col min-h-screen ">
      <Header />
      <Form onAddItem={addItemHandler} />
      <PackingList
        items={items}
        onDeleteItem={deleteItemHandler}
        onPackedItem={packedItemHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
