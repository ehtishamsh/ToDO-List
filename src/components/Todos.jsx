import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Todos() {
  return (
    <div className="w-[700px]">
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-indigo-400 font-bold">
          Tasks Created{" "}
          <span className="bg-gray-700 text-slate-200 px-2 py-[2px] text-xs rounded-xl">
            0
          </span>
        </h3>
        <h3 className="text-sm text-purple-400 font-bold">
          Completed{" "}
          <span className="bg-gray-700 text-slate-200 px-2 py-[2px] text-xs rounded-xl">
            2 of 5
          </span>
        </h3>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center">
        <hr className="w-full border-solid border border-darkColor-100 mb-16" />
        <img src="/EmptyList.png" alt="" className="w-16 mb-4" />
        <p className="text-darkColor-50 font-bold text-base">
          You haven't added any tasks yet
        </p>
        <p className="text-darkColor-50 text-base">
          Create tasks and organize your to-do items
        </p>
      </div>
    </div>
  );
}

export default Todos;
