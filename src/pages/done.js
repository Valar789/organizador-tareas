import React, { useEffect, useState } from "react";

export default function Done() {
  const [listTaskDone, setlistTaskDone] = useState([]);

  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem("history"));
    const data = loadData !== "undefinded" && loadData !== null ? loadData : [];
    setlistTaskDone(data);
  }, []);

  return (
    <main className="max-w-2xl bg-white p-4 h-full min-h-screen m-auto">
      <h1 className="text-xl font-bold text-gray-600 text-center my-5">
        Tareas terminadas
      </h1>
      {listTaskDone.map((element) => (
        <div className="flex justify-between border-b mb-1" key={element.nameTask}>
          <span>- {element.nameTask}</span>
          <span>{element.dateDone}</span>
        </div>
      ))}
    </main>
  );
}
