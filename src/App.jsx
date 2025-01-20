import HomePage from "./pages/HomePage";
import "./index.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <p className="text-red-800 font-bold"> tailwind</p>
      <HomePage></HomePage>
    </>
  );
}

export default App;
