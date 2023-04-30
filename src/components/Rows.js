import React from "react";
import { useEffect, useState } from "react";

export default function Rows({ title, color }) {
  const [value, setvalue] = useState("");
  const [listTask, setlistTask] = useState([]);

  let colorBorderB;
  const nameList = title;

  title === "Alta prioridad" && (colorBorderB = "border-rose-600");
  title === "Media prioridad" && (colorBorderB = "border-orange-500");
  title === "Baja prioridad" && (colorBorderB = "border-green-500");

  const handleDelete = (e, i) => {
    e.preventDefault();
    const newTaskList = [...listTask];
    newTaskList.splice(i, 1);
    setlistTask(newTaskList);
    localStorage.setItem(nameList, JSON.stringify(newTaskList));
  };

  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem(nameList));
    const data = loadData !== "undefinded" && loadData !== null ? loadData : [];
    setlistTask(data);
  }, [nameList]);

  const handleCapture = (e) => {
    setvalue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (listTask && !listTask.includes(value)) {
      const listUpdate = [...listTask, value];
      localStorage.setItem(nameList, JSON.stringify(listUpdate));
      setlistTask(listUpdate);
      setvalue("");
    } else {
      alert("Ya creaste esta tarea ");
    }
  };

  const deleteAll = (e, listTile) => {
    e.preventDefault();
    localStorage.removeItem(listTile);
    const newState = localStorage.getItem(listTile) || [];
    setlistTask(newState);
  };

  return (
    <div className="mb-2   grid grid-cols-12 w-full overflow-auto">
      <div
        className={`${color} rounded-md shadow shadow-gray-400 text-xs md:text-lg col-span-2 grid place-content-center text-white`}
      >
        <p className="hidden sm:block"> {title}</p>
        <button
          onClick={(e) => deleteAll(e, title)}
          className="underline text-xs"
        >
          Borrar todas
        </button>
      </div>
      <div className="col-span-6 sm:col-span-8 flex flex-wrap overflow-auto">
        {listTask && listTask.length > 0 ? (
          listTask.map((task, i) => (
            <div
              key={task}
              className={`bg-white h-52 rounded-md shadow shadow-gray-400 w-52 mx-1 border-b-8 ${colorBorderB} overflow-auto text-sm col-span-2 flex flex-col text-center `}
            >
              <div className=" font-bold text-gray-400 h-5 p-1 flex justify-between">
                <div className="grid place-content-center ">{i + 1}</div>

                <button
                  onClick={(e) => handleDelete(e, i)}
                  className=" grid place-content-center"
                >
                  x
                </button>
              </div>
              <div className="p-3 grid place-content-center h-full">{task}</div>
            </div>
          ))
        ) : (
          <div className="grid place-content-center px-7 text-gray-400">
            Sin tareas
          </div>
        )}
      </div>
      <form
        className="bg-green-500 rounded-md  shadow shadow-gray-400 col-span-4 sm:col-span-2 grid grid-rows-12"
        onSubmit={handleAddTask}
      >
        <input
          onChange={handleCapture}
          rows={5}
          required
          value={value}
          minLength={4}
          maxLength={200}
          placeholder="Tarea"
          className="p-2 row-span-6 grid place-content-center text-center w-full h-full"
        />
        <button
          className={`text-white ${colorBorderB} grid place-content-center h-full`}
        >
         + Añadir tarea
        </button>
      </form>
    </div>
  );
}
