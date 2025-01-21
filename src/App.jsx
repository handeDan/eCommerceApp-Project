import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="bg-[url('../../src/images/main-bg.jpg')] bg-cover bg-bottom h-full w-full absolute">
        <Header></Header>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
