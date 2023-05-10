import React from "react";

const Task = ({ task, handleDelete,index }) => {
  return (
    <div className="flex border-b  items-center justify-between bg-white text-gray-500 text-md rounded-md px-4 py-2 mb-2">
      <span className="">{index}</span>
      <span className="">{task}</span>
      <button
        className="text-red-500 font-semibold"
        onClick={(e) => handleDelete(e, task)}
      >
        Terminar
      </button>
    </div>
  );
};

export default Task;
