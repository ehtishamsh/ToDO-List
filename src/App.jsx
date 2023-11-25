import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
function App() {
  return (
    <div className="bg-darkColor-300 h-screen w-screen">
      <Header />
      <div className="flex justify-center items-center">
        <Todos />
      </div>
    </div>
  );
}

export default App;
