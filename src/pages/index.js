import Rows from "@/components/Rows";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

let nameList="saveTask";

export default function Home() {
  const titlesPriority = [
    { title: "Alta prioridad", color: "text-rose-600" },
    { title: "Media prioridad", color: "text-orange-500" },
    { title: "Baja prioridad", color: "text-green-500" },
  ];

  const [value, setvalue] = useState("");
  const [listTask, setlistTask] = useState([]);
  const [prority, setPrority] = useState(titlesPriority[0].title);

  const handleDelete = (e, taskTitle) => {
    e.preventDefault();
    
    // Update task list
    const newTaskList = listTask.filter((task) => task.task !== taskTitle);
    setlistTask(newTaskList);
    localStorage.setItem(nameList, JSON.stringify(newTaskList));
  
    // Update history
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleString("en-US", { timeZone: "America/Bogota" })}`;
  
    const historyCopy = JSON.parse(localStorage.getItem("history")) || [];
    const newHistoryItem = { nameTask: taskTitle, dateDone: formattedDate };
    localStorage.setItem("history", JSON.stringify([newHistoryItem, ...historyCopy]));
  };

  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem(nameList));
    const data = loadData !== "undefinded" && loadData !== null ? loadData : [];
    setlistTask(data);
  }, []);

  const handleCapture = (e) => {
    setvalue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskExists = listTask.some((task) => task.task === value);
  
    if (!taskExists) {
      const listUpdate = [...listTask, { task: value, priority: prority }];
      localStorage.setItem(nameList, JSON.stringify(listUpdate));
      setlistTask(listUpdate);
      setvalue("");
    } else {
      alert("Ya creaste esta tarea");
    }
  };
  
  const deleteAll = (e, listTile) => {
    e.preventDefault();
    localStorage.removeItem(listTile);
    const newState = localStorage.getItem(listTile) || [];
    setlistTask(newState);
  };

  return (
    <>
      <main className={`max-w-5xl bg-white p-4 h-full min-h-screen m-auto ${roboto.className}`}>
        <h2 className="text-xl font-bold text-gray-600 text-center my-5">
          Tareas pendientes
        </h2>
        <form
          className="flex gap-2 h-12 rounded-md mb-7"
          onSubmit={handleAddTask}
        >
          <input
            onChange={handleCapture}
            rows={5}
            required
            value={value}
            minLength={4}
            maxLength={200}
            placeholder="Escribir nueva tarea"
            className="h-full text-gray-700  grid place-content-center rounded-md border-b focus:outline-none focus:border-b-2 focus:border-gray-300 text-center w-full"
          />
          <select
            onChange={(e) => setPrority(e.target.value)}
            value={prority}
            className="text-gray-600 border-b border-r rounded-md focus:outline-none focus:border-b-2 focus:border-gray-300"
            name="prioridad"
            id=""
          >
            {titlesPriority.map((ele) => (
              <option
              className={`${ele.color}`}
              
                key={ele.title}
                value={ele.title}
              >
                {ele.title}
              </option>
            ))}
          </select>
          <button className={`text-center px-3 text-white rounded-md bg-teal-500 h-full`}>
            Añadir
          </button>
        </form>

        {titlesPriority.map((element) => (
          <Rows
            key={element.title}
            listTask={listTask.filter((t) => t.priority === element.title)}
            title={element.title}
            color={element.color}
            handleDelete={handleDelete}
          />
        ))}
      </main>
    </>
  );
}
