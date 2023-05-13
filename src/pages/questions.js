import React, { useEffect, useState } from "react";

export default function Questions() {
  let localQuestions = []
  const [value, setValue] = useState("");
  const [listQuestions, setListQuestions] = useState([]);

  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem(localQuestions));
    const data = loadData !== "undefinded" && loadData !== null ? loadData : [];
    setListQuestions(data);
  }, []);

  const handleCapture =(e)=>{
setValue(e.target.value)

  }
  const handleAddQuestion = (e) => {
    e.preventDefault();

  
    if (!listQuestions.includes(value)) {
      const listUpdate = [...listQuestions, value];
      localStorage.setItem(localQuestions, JSON.stringify(listUpdate));
      setListQuestions(listUpdate);
      setValue("");
    } else {
      alert("Ya creaste esta pregunta");
    }
  };
  
  const handleDelete =(e,element)=>{
    e.preventDefault();
    const newTaskList = listQuestions.filter((question) => question !== element);
    setListQuestions(newTaskList);
    localStorage.setItem(localQuestions, JSON.stringify(newTaskList));
  }

  return (
    <main className={`max-w-5xl bg-white p-4 h-full min-h-screen m-auto`}>
      <h2 className="text-xl font-bold text-gray-600 text-center my-5">
        Preguntas para el Trabajo
      </h2>
      <form
        className="flex gap-2 h-12 rounded-md mb-7"
        onSubmit={handleAddQuestion}
      >
        <input
          onChange={handleCapture}
          rows={5}
          required
          value={value}
          minLength={4}
          maxLength={200}
          placeholder="Escribir nueva pregunta"
          className="h-full text-gray-700  grid place-content-center rounded-md border-b focus:outline-none focus:border-b-2 focus:border-gray-300 text-center w-full"
        />

        <button
          className={`text-center px-3 text-white rounded-md bg-teal-500 h-full`}
        >
          Añadir
        </button>
      </form>

      <div className="overflow-auto h-full px-3">
        {listQuestions.map((element) => (
          <div className="flex justify-between border-b mb-1" key={element}>
            <span className="first-letter:uppercase">{element}</span>
            <button onClick={(e)=>handleDelete(e,element)}>Eliminar</button>
          </div>
        ))}
      </div>
    </main>
  );
}
