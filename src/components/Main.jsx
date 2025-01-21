import React from "react";
import { useHistory } from "react-router-dom";

function Main() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/catalog");
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-20">
        <p className="logo text-5xl">FURNITURE STORE.</p>
        <br />
        <p>Discover our products now</p>
        <button
          onClick={handleClick}
          className="bg-gray-950 hover:bg-gray-500 text-xl text-white font-bold py-3 px-6 rounded-full m-5"
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Main;
