import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";
function Header({ todo, setTodo }) {
  const [textValue, setTextValue] = useState("");
  function addtodo() {
    setTodo((prev) => {
      return [
        { id: nanoid(), text: textValue, completed: false, edit: false },
        ...prev,
      ];
    });
  }
  return (
    <header className="h-40 bg-darkColor-400 flex flex-col items-center justify-center relative mb-16">
      <nav className="flex justify-center items-center gap-2">
        <FontAwesomeIcon
          icon={faSquareCheck}
          className="text-3xl text-blue-400 flex justify-center items-center pt-2"
        />
        <h2 className="text-purple-400 font-bold text-4xl">
          to<span className="text-blue-400">do</span>
        </h2>
      </nav>
      <div className="flex justify-center items-center gap-2 translate-y-20 absolute">
        <input
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Create a Task"
          className="w-[620px] p-3 rounded-lg bg-darkColor-200 border-darkColor-400 border-2 border-solid outline-none text-slate-200"
        />
        <button
          onClick={addtodo}
          className="p-3 rounded-lg bg-indigo-500 text-slate-200 hover:bg-indigo-600 transition-colors duration-300"
        >
          Add <FontAwesomeIcon icon={faCircleCheck} />
        </button>
      </div>
    </header>
  );
}

export default Header;
