import Task from "./Task";

const Rows = ({ listTask, title, color, handleDelete }) => {
  const handleDeleteAll = (e) => {
    handleDeleteTask(e, null);
  };

  return (
    <details open className="mb-7 ">
      <summary className={`${color} text-lg font-semibold text-gray-700`}>{title}</summary>
      {/* <button
        onClick={handleDeleteAll}
        className={`px-2 py-1 text-white rounded-md ml-2 ${color}`}
      >
        Borrar todo
      </button> */}
      {listTask.map((task,index) => (
        <Task
        index={index+1}
          key={task.task}
          task={task.task}
          color={color}
          handleDelete={handleDelete}
        />
      ))}
    </details>
  );
};

export default Rows;