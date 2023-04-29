import React from 'react'
import { useEffect, useState } from "react";

export default function Rows({title, color}) {
    const [value, setvalue] = useState("");
    const [listTask, setlistTask] = useState([]);
 
    const nameList = title
    useEffect(() => {
      const loadData = JSON.parse(localStorage.getItem(nameList));
      console.log(loadData);
      const data = loadData !== "undefinded" && loadData !== null ? loadData : []
      setlistTask(data);
    }, []);
  
    const handleCapture = (e) => setvalue(e.target.value);
  
    const handleAddTask = (e) => {
      e.preventDefault();
      const listUpdate = [...listTask, value];
      localStorage.setItem(nameList, JSON.stringify(listUpdate));
      setlistTask(listUpdate);
    };
  
    const handleDelete = (e, i) => {
      e.preventDefault();
      const newTaskList = [...listTask];
      newTaskList.splice(i, 1);
      setlistTask(newTaskList);
      localStorage.setItem(nameList, JSON.stringify(newTaskList));
    };
  
    
  return (
    <div className="my-1  grid grid-cols-12 w-full">
    <div className={`${color} col-span-2 grid place-content-center text-white`}>
        {title}
      </div>
      {listTask && listTask.map((task, i) => (
        <div
          key={task}
          className="bg-white border text-sm col-span-2 flex-col place-content-center text-center h-full p-2 flex justify-around "
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
      <form
        className="bg-rose-400 w-56 grid grid-rows-12"
        onSubmit={handleAddTask}
      >
        <input
          onChange={handleCapture}
          rows={5}
          required
          minLength={4}
          placeholder="+ Agregar tarea"
          className="row-span-6 grid place-content-center text-center w-full h-full"
        />
        <button className="max-h-12 text-white bg-green-500 grid place-content-center h-full">
          Agregar tarea
        </button>
      </form>
    </div>
  )
}
