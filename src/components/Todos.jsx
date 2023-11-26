import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Todos({ todos, setCurrentId, handleChange }) {
  const checkCompelted = todos.filter((item) => item.completed === true);
  const todoElement = todos.map((todo, index) => {
    return (
      <div
        key={index}
        onClick={() => setCurrentId(todo.id)}
        className={`flex ${
          todo.completed && "pointer-events-none"
        } justify-between items-center w-full gap-4 bg-darkColor-100 p-4 text-slate-200 border-solid ${
          todo.completed ? " border-darkColor-100" : " border-darkColor-75"
        } border rounded-lg`}
      >
        <div className="flex items-center">
          <input
            type="checkbox"
            id="checkbox"
            className="hidden"
            checked={todo.completed}
            onChange={handleChange}
          />
          <label
            htmlFor="checkbox"
            className={`flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer  ${
              todo.completed
                ? "border-purple-500 bg-purple-500"
                : "border-indigo-500 bg-transparent"
            }`}
          >
            {todo.completed === true && (
              <FontAwesomeIcon
                icon={faCheck}
                className="text-slate-50 text-[10px]"
              />
            )}
          </label>
        </div>
        <p className={`text-sm ${todo.completed && "line-through"}`}>
          {todo.text}
        </p>
        <FontAwesomeIcon
          icon={faTrashCan}
          className="text-sm text-darkColor-50"
        />
      </div>
    );
  });

  return (
    <div className="w-[700px]">
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-indigo-400 font-bold">
          Tasks Created
          <span className="bg-gray-700 text-slate-200 px-2 py-[2px] text-xs rounded-xl ml-1">
            {todos.length}
          </span>
        </h3>
        <h3 className="text-sm text-purple-500 font-bold">
          Completed
          <span className="bg-gray-700 text-slate-200 px-2 py-[2px] text-xs rounded-xl ml-1">
            {checkCompelted.length} out of {todos.length}
          </span>
        </h3>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center gap-3">
        {todos.length > 0 ? (
          todoElement
        ) : (
          <>
            <hr className="w-full border-solid border border-darkColor-100 mb-16" />
            <img src="/EmptyList.png" alt="" className="w-16 mb-4" />
            <p className="text-darkColor-50 font-bold text-base">
              You haven't added any tasks yet
            </p>
            <p className="text-darkColor-50 text-base">
              Create tasks and organize your to-do items
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Todos;
