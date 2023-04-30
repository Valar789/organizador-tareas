import React from "react";
import { useEffect, useState } from "react";

export default function Rows({ title, color }) {
  const [value, setvalue] = useState("");
  const [listTask, setlistTask] = useState([]);

  let colorBorderB;
  const nameList = title;

  title === "Alta prioridad" && (colorBorderB = "border-red-500");
  title === "Media Proridad" && (colorBorderB = "border-orange-500");
  title === "Baja Prioridad" && (colorBorderB = "border-green-500");

  const handleDelete = (e, i) => {
    e.preventDefault();
    const newTaskList = [...listTask];
    newTaskList.splice(i, 1);
    setlistTask(newTaskList);
    localStorage.setItem(nameList, JSON.stringify(newTaskList));
  };


  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem(nameList));
    console.log(loadData);
    const data = loadData !== "undefinded" && loadData !== null ? loadData : [];
    setlistTask(data);
  }, [handleDelete]);

  const handleCapture = (e) => {
    setvalue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (listTask  && !listTask.includes(value)) {
      const listUpdate = [ value, ...listTask];
      localStorage.setItem(nameList, JSON.stringify(listUpdate));
      setlistTask(listUpdate);
    } else {
      alert("Ya creaste esta tarea ");
    }
  };


  const deleteAll =(e, listTile)=>{
    e.preventDefault();
    localStorage.removeItem(listTile)
    const newState = localStorage.getItem(nameList)
    setlistTask(newState)
  }

  return (
    <div className="mb-2  grid grid-cols-12 w-full overflow-auto">
      <div
        className={`${color} text-lg col-span-2 grid place-content-center text-white`}
      >
        {title}
        <button onClick={(e)=>deleteAll(e, title)} className="underline text-xs">Borrar todas</button>
      </div>
      <div className="col-span-8 flex flex-wrap overflow-auto">
      {listTask &&
        listTask.map((task, i) => (
          <div
            key={task}
            className={`bg-white w-52 mx-1 border-b-8 ${colorBorderB} overflow-auto text-sm col-span-2 flex-col place-content-center text-center h-full p-3 flex justify-around`}
          >
            {task}
            <button
              onClick={(e) => handleDelete(e, i)}
              className="text-red-500  px-2 rounded-sm"
            >
              Finalizar Tarea
            </button>
          </div>
        ))}
        </div>
      <form
        className="bg-green-300 w-56 grid grid-rows-12"
        onSubmit={handleAddTask}
      >
        <input
          onChange={handleCapture}
          rows={5}
          required
          minLength={4}
          maxLength={200}
          placeholder="+ Agregar tarea"
          className="p-2 row-span-6 grid place-content-center text-center w-full h-full"
        />
        <button className={`text-white ${colorBorderB} grid place-content-center h-full`}>
          Agregar tarea
        </button>
      </form>
    </div>
  );
}
