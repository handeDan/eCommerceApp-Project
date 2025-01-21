import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";

function HomePage() {
  return (
    <div>
      {" "}
      <div className="bg-[url('../../src/images/main-bg.jpg')] bg-cover bg-bottom h-full w-full absolute">
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

export default HomePage;
