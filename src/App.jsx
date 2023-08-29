import Form from "./components/Form";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PackingList from "./layout/PackingList";

function App() {
  return (
    <div className=" bg-[#5a3e2b] flex flex-col min-h-screen ">
      <Header />
      <Form />
      <PackingList />
      <Footer />
    </div>
  );
}

export default App;
